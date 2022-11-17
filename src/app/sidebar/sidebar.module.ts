import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarContainerComponent } from './sidebar-container/sidebar-container.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { SavedScoreItemComponent } from './saved-score-item/saved-score-item.component';

@NgModule({
  declarations: [
    SidebarContainerComponent,
    SavedScoreItemComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    SidebarContainerComponent
  ]
})
export class NavigationModule { }
