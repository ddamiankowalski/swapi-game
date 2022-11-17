import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';

interface score {
  id: string
  score: number
}

@Injectable({
  providedIn: 'root'
})
export class ScoreboardService {

  constructor(
    public utils: UtilsService
  ) { }

  /**
   * user ID
   */
  private _userId: string = '';

  /**
   * History to present the last change
   */
  public history: number = 0;

  /**
   * Number of points a user has gotten so far
   */
  private _score: number = 0;

  /**
   * A method that removes or adds the point
   * @param value value of the point to be added/removed
   */
  public pointChange(value: number) {
    this.history = value;
    if(value === -1 && this._score === 0) return;
    this._score += value;
  }

  /**
   * getter for the score
   * @returns score
   */
  public getScore(): number {
    return this._score;
  }

  /**
   * public function that saves the current scoreboard
   */
  public saveScoreboards(): void {
    let uuid: string;
    if(localStorage.getItem('swapi_id') === null) {
      uuid = this.utils.uuid();
      this._userId = uuid;
      localStorage.setItem('swapi_id', uuid)
    }
    
    let newScore: score = { id: this._userId, score: this._score };
    let currentScore = this.getScoreboards();
    currentScore.push(newScore);
    localStorage.setItem('swapi_scoreboard', JSON.stringify(currentScore))
  }

  /**
   * Returns the scoreboard from localstorage
   */
  public getScoreboards(): Array<score> {
    const json = localStorage.getItem('swapi_scoreboard');
    if(json === null) return [];
    const parsed = JSON.parse(json);
    return parsed;
  }
}
