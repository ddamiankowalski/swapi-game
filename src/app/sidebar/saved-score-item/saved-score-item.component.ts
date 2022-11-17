import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-score-item',
  templateUrl: './saved-score-item.component.html',
  styleUrls: ['./saved-score-item.component.scss']
})
export class SavedScoreItemComponent implements OnInit {

  constructor() { }

  /**
   * Score item passed from the parent component
   */
  @Input() public item: any;

  ngOnInit(): void {
  }

}
