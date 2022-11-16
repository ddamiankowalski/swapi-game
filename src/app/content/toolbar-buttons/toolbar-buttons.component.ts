import { Component, OnInit } from '@angular/core';

interface menuItem {
  name: string
}

@Component({
  selector: 'app-toolbar-buttons',
  templateUrl: './toolbar-buttons.component.html',
  styleUrls: ['./toolbar-buttons.component.scss']
})
export class ToolbarButtonsComponent implements OnInit {

  constructor() { }

  public menuItems: Array<menuItem> = [
    { name: 'play' },
    { name: 'score' },
    { name: 'reset' }
  ];

  ngOnInit(): void {
  }

  handleClick(event: any) {
    console.log(event)
  }

}
