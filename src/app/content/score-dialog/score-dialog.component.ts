import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.scss']
})
export class ScoreDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ScoreDialogComponent>,
    public scoreboard: ScoreboardService
  ) { }

  ngOnInit(): void {
  }

  /**
   * A method used to close the dialog
   */
  close() {
    this.dialogRef.close();
  }

  /**
   * A method used to save the current game to scoreboard
   */
  save() {
    this.scoreboard.saveScoreboards();
  }

}
