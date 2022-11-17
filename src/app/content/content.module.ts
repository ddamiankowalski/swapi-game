import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentContainerComponent } from './content-container/content-container.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarButtonsComponent } from './toolbar-buttons/toolbar-buttons.component';
import { GlobalModule } from '../global/global.module';
import { MainMessageComponent } from './main-message/main-message.component';
import { RouterModule } from '@angular/router';
import { routes } from '../routes/routes';
import { ScoreDialogComponent } from './score-dialog/score-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ContentContainerComponent,
    ToolbarComponent,
    ToolbarButtonsComponent,
    MainMessageComponent,
    ScoreDialogComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    GlobalModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    ContentContainerComponent
  ]
})
export class ContentModule { }
