import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { GlobalButtonComponent } from './globalbutton/globalbutton.component';


@NgModule({
  declarations: [
    GlobalButtonComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    GlobalButtonComponent
  ]
})
export class GlobalModule { }
