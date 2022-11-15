import { Component, OnInit } from '@angular/core';

interface menuItem {
  itemName: string
}

@Component({
  selector: 'app-toolbar-buttons',
  templateUrl: './toolbar-buttons.component.html',
  styleUrls: ['./toolbar-buttons.component.scss']
})
export class ToolbarButtonsComponent implements OnInit {

  constructor() { }

  public menuItems: Array<menuItem> = [
    { itemName: 'play' },
    { itemName: 'score' },
    { itemName: 'reset' }
  ];

  ngOnInit(): void {
  }

}
