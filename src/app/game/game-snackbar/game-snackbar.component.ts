import { Component, OnInit } from '@angular/core';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-game-snackbar',
  templateUrl: './game-snackbar.component.html',
  styleUrls: ['./game-snackbar.component.scss']
})
export class GameSnackbarComponent implements OnInit {

  constructor(
    public scoreboard: ScoreboardService
  ) { }

  public messages = {
    win: 'You have earned a point!',
    lose: 'You have lost a point!',
    draw: 'It is a draw!'
  }

  public message: string = '';

  ngOnInit(): void {
    this.message = this.setMessage(this.scoreboard.history);
  }

  public setMessage(value: number): string {
    if(value === 0) {
      return this.messages.draw;
    } else if(value === -1) {
      return this.messages.lose
    } else {
      return this.messages.win
    }
  }

}
