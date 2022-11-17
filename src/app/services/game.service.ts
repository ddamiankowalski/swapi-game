import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, catchError, forkJoin, map, Observable, throwError } from 'rxjs';
import { GameSnackbarComponent } from '../game/game-snackbar/game-snackbar.component';
import { BackendService } from './backend.service';
import { ScoreboardService } from './scoreboard.service';
import { UtilsService } from './utils.service';

interface card {
  cardName: string
  cardMass: string
  cardStarship?: Array<string>
  cardStarshipValue?: number
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    public backend: BackendService,
    public utils: UtilsService,
    public scoreboard: ScoreboardService,
    private _snackBar: MatSnackBar
  ) { }

  /**
   * currentcard object
   */
  private _currentCard!: card;

  /**
   * currentopponent object
   */
  private _currentOpponent!: card;

  /**
   * indicator of fight option
   */
  public fightOption: 'mass' | 'starship' = 'mass';



  /**
   * THe current game status
   */
  public status: 'fight' | 'cardchoose' = 'cardchoose';

  /**
   * Observable that emits values for the amount of cew in a starhip
   */
  public starshipCrewAmount$: BehaviorSubject<string> = new BehaviorSubject('');

  /**
   * A behavior subject that returns loaded cards information
   */
  public newCardLoaded$: BehaviorSubject<any> = new BehaviorSubject(null);

  /**
   * A behavior subject that returns loaded enemy card info
   */
  public enemyModelLoaded$: BehaviorSubject<any> = new BehaviorSubject(null);

  /**
   * A property that indicates whether the model is loading to disable the model
   */
  public isLoading: boolean = false;

  /**
   * Getter for a new card from the API service
   */
  public getCard(): void {
    this.isLoading = true;
    this.backend.getRequest(`people/${this.utils.getRandomNumber(1, 87)}`).pipe(
      catchError(err => {
        this.newCardLoaded$.next(null);
        this.isLoading = false;
        return throwError(() => new Error(err));
      })
    ).subscribe((card: any) => this.assignCard(card))
  }

  /**
   * Method that runs after a card had been loaded
   * @param starshipData starshipData from the card
   */
  public getStarshipCrew(starshipData: Array<any> | undefined): void {
    if(starshipData?.length === 0 || !starshipData) {
      this.starshipCrewAmount$.next('0');
      return;
    }

    let starshipObservables: Array<Observable<any>> = starshipData.map(url => {
      this.starshipCrewAmount$.next('Calculating...');
      this.isLoading = true;
      return this.backend.getRequest(url, true);
    })

    forkJoin(starshipObservables).pipe(
      catchError(err => {
        this.newCardLoaded$.next(null);
        this.isLoading = false;
        return throwError(() => new Error(err));
      }),
      map((starship: any) => starship.map((s: any) => Number(s.crew))),
    ).subscribe(crewNumber => this.handleCrewNumberChange(crewNumber))
  }

  /**
   * Function that overrides the crenumber
   * @param number new number to be assigned
   */
  public handleCrewNumberChange(numberArr: Array<number>) {
    const result = numberArr.reduce((acc, curr) => acc + curr, 0);
    this.isLoading = false;
    this.starshipCrewAmount$.next(result.toString());
    this.setStarshipValue(result)
  }

  public setStarshipValue(value: number) {
    this._currentCard.cardStarshipValue = value;
  }

  /**
   * Assign the object returned from API to the model
   * @param cardObject object returned from the API
   */
  public assignCard(cardObject: any, starshipValue = 0): void {
    this.isLoading = false;

    this._currentCard = { 
      cardName: cardObject?.name, 
      cardMass: cardObject?.mass, 
      cardStarship: cardObject?.starships,
      cardStarshipValue: starshipValue
    }

    this.newCardLoaded$.next(this._currentCard);
  }

  /**
   * A handler that starts a fight between two cards
   */
  public startFight(): void {
    this.isLoading = true;
    this.backend.getRequest(`people/${this.utils.getRandomNumber(1, 87)}`).pipe(
      catchError(err => {
        this.newCardLoaded$.next(null);
        this.isLoading = false;
        return throwError(() => new Error(err));
      })
    ).subscribe((card: any) => this.handleOpponentCard(card))
  }

  /**
   * Handler for the opponentcard, fetch the number of crew in forkjoin
   * @param card The current card
   * @returns void 
   */
  public handleOpponentCard(card: any): void {
    this.isLoading = false;

    const opponentStarships = card.starships;
    const starshipObservables: Array<Observable<any>> = opponentStarships.map((url: any) => {
      return this.backend.getRequest(url, true);
    })

    if(starshipObservables.length === 0) {
      this.handleOpponentCrewChange([0], card);
      return;
    }

    forkJoin(starshipObservables).pipe(
      catchError(err => {
        this.isLoading = false;
        return throwError(() => new Error(err));
      }),
      map((starship: any) => starship.map((s: any) => Number(s.crew))),
    ).subscribe(crewNumber => this.handleOpponentCrewChange(crewNumber, card))
  }

  /**
   * Handler for the opponent starships forkjoin
   * @param numberArr array of numbers of crew in different ships
   * @param card currentcard
   */
  public handleOpponentCrewChange(numberArr: Array<number>, card: any) {
    const result = numberArr.reduce((acc, curr) => acc + curr, 0);
    this.isLoading = false
    
    this._currentOpponent = { 
      cardName: card?.name, 
      cardMass: card?.mass, 
      cardStarshipValue: result
    }

    this.enemyModelLoaded$.next(this._currentOpponent);
    this.evaluateFight(this._currentCard, this._currentOpponent)
  }

  /**
   * A method that calls the 
   * @param currentCard currentcardmodel
   * @param currentOpponent currentopponentmodel
   * @returns void
   */
  public evaluateFight(currentCard: card, currentOpponent: card): void {
    let opponentValue = this.fightOption === 'mass' ? currentOpponent.cardMass : currentOpponent.cardStarshipValue;
    let ownCardValue = this.fightOption === 'mass' ? currentCard.cardMass : currentCard.cardStarshipValue;
    if(opponentValue === undefined || ownCardValue === undefined) {
      return;
    }

    let snackbarRef;
    if(opponentValue === 'unknown') opponentValue = '0';
    if(ownCardValue === 'unknown') ownCardValue = '0';

    if(opponentValue > ownCardValue) {
      this.scoreboard.pointChange(-1)
      snackbarRef = this._snackBar.openFromComponent(GameSnackbarComponent, { duration: 3000 })

    } else if(opponentValue < ownCardValue) {
      this.scoreboard.pointChange(1);
      snackbarRef = this._snackBar.openFromComponent(GameSnackbarComponent, { duration: 3000 })

    } else {
      this.scoreboard.pointChange(0);
      snackbarRef = this._snackBar.openFromComponent(GameSnackbarComponent, { duration: 3000 })
    }
  }

  /**
   * Method returns a new card observable
   * @returns new card subject as observable
   */
  public getNewCardObservable(): Observable<any> {
    return this.newCardLoaded$.asObservable();
  }

  /**
   * Method returns a new enemymodel observable
   * @returns enemy model observable
   */
  public getEnemyModel(): Observable<any> {
    return this.enemyModelLoaded$.asObservable();
  }

  /**
   * setter for the fightoption
   * @param value
   */
  public setFightOption(value: 'mass' |'starship'): void {
    this.fightOption = value;
  }
  
}
