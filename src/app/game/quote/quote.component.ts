import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * A quote that is currently being displayed
   */
  public currentQuote: string = '';

  /**
   * Author of the quote
   */
  public author: string = '';

}
