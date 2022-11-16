import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss']
})
export class SidebarContainerComponent implements OnInit {

  constructor(
    public navigation: NavigationService
  ) { }

  public isOpened: boolean = false;

  get gameTitle(): string {
    return 'Star Wars API Card Game'
  }

  ngOnInit(): void {
  }
}
