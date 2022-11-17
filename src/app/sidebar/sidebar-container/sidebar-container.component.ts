import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { ScoreboardService } from 'src/app/services/scoreboard.service';

@Component({
  selector: 'app-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss']
})
export class SidebarContainerComponent implements OnInit {

  constructor(
    public navigation: NavigationService,
    public scoreboard: ScoreboardService
  ) { }

  public isOpened: boolean = false;

  get gameTitle(): string {
    return 'Star Wars API Card Game'
  }

  ngOnInit(): void {
  }
}
