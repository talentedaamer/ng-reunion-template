import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuCardComponent } from './ru-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    RuCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    RuCardComponent
  ]
})
export class RuCardModule { }
