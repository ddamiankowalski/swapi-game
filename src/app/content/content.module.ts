import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentContainerComponent } from './content-container/content-container.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarButtonsComponent } from './toolbar-buttons/toolbar-buttons.component';


@NgModule({
  declarations: [
    ContentContainerComponent,
    ToolbarComponent,
    ToolbarButtonsComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ContentContainerComponent
  ]
})
export class ContentModule { }
