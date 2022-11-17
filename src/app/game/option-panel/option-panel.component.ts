import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-option-panel',
  templateUrl: './option-panel.component.html',
  styleUrls: ['./option-panel.component.scss']
})
export class OptionPanelComponent implements OnInit, OnDestroy {

  constructor(
    public game: GameService
  ) { }

  public subscriptions: Subscription = new Subscription();

  ngOnInit(): void { 
    this.subscriptions.add(
      this.game.newCardLoaded$.subscribe(card => this.game.getStarshipCrew(card?.cardStarship))
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * fight option property
   */
  public fightOption: 'mass' | 'starship' = 'mass';

  /**
   * Start a new round or get a new card, set fightoption as mass for default
   */
  public newRound() {
    this.game.setFightOption('mass');
    this.game.status = 'cardchoose';
    this.game.enemyModelLoaded$.next(null);
    this.game.getCard();
  }

  /**
   * Start a fight against a CPU
   */
  public startFight() {
    this.game.startFight();
    this.game.status = 'fight';
  }
}
