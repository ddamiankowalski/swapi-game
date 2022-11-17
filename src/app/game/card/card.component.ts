import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { GameService } from 'src/app/services/game.service';

interface card {
  cardName: string
  cardMass: string
  cardStarship?: Array<string>
  cardStarshipValue?: number
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(
    public game: GameService
  ) { }

  /**
   * Sene fightoption change to parent
   * @param event matByttonToggleChange event
   */
  changeFightOption(event: MatButtonToggleChange): void {
    this.game.setFightOption(event.value)
  }
  
  /**
   * cardModel information
   */
  @Input() cardModel: card | undefined;

  /**
   * cardModel for enemy
   */
  @Input() enemyModel: card | undefined;

  /**
   * Is loading property for the model
   */
  public isLoading: boolean = false;

  /**
   * Fight option when there are more than 1 option
   */
  public fightOption: 'mass' | 'starship' = 'mass';
}
