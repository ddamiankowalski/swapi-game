import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../global/global.module';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { GameContainerComponent } from './game-container/game-container.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    GameContainerComponent,
    QuoteSectionComponent,
    QuoteComponent,
  ],
  imports: [
    CommonModule,
    GlobalModule
  ]
})
export class GameModule { }
