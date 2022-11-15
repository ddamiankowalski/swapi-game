import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit {

  constructor() { }

  get appTitle(): string {
    return 'Star Wars API Game';
  }

  ngOnInit(): void {
  }

}
