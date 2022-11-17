import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../global/global.module';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { GameContainerComponent } from './game-container/game-container.component';
import { QuoteComponent } from './quote/quote.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { OptionPanelComponent } from './option-panel/option-panel.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GameSnackbarComponent } from './game-snackbar/game-snackbar.component';


@NgModule({
  declarations: [
    GameContainerComponent,
    QuoteSectionComponent,
    QuoteComponent,
    CardsContainerComponent,
    CardComponent,
    OptionPanelComponent,
    GameSnackbarComponent,
  ],
  imports: [
    CommonModule,
    GlobalModule,
    MatCardModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatSnackBarModule
  ]
})
export class GameModule { }
