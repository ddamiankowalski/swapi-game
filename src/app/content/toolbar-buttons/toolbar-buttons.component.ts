import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreDialogComponent } from '../score-dialog/score-dialog.component';

interface menuItem {
  name: string
  onclick: Function
}

@Component({
  selector: 'app-toolbar-buttons',
  templateUrl: './toolbar-buttons.component.html',
  styleUrls: ['./toolbar-buttons.component.scss']
})
export class ToolbarButtonsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public menuItems: Array<menuItem> = [
    { name: 'play', onclick: () => this.navigateToGame() },
    { name: 'score', onclick: () => this.openDialog() }
  ];

  ngOnInit(): void {
  }

  navigateToGame() {
    this.router.navigate(['game'], { relativeTo: this.route })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ScoreDialogComponent, {
      width: '250px'
    });
  }
}
