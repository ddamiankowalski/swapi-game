import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public navigation: NavigationService
  ) { }

  get appTitle(): string {
    return 'Star Wars';
  }

  public shareHover: boolean = true;

  toggleHelp(value: boolean): void {
    this.shareHover = value;
  }

  toggleNavigation(): void {
    this.navigation.toggleNav(true);
  }

  ngOnInit(): void {
  }

}
