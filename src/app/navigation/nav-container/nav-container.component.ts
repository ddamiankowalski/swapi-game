import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-nav-container',
  templateUrl: './nav-container.component.html',
  styleUrls: ['./nav-container.component.scss']
})
export class NavContainerComponent implements OnInit {

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
