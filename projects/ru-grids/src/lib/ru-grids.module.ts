import { NgModule } from '@angular/core';
import { RuRowDirective } from './directives/ru-row.directive';

@NgModule({
  declarations: [
    RuRowDirective,
  ],
  exports: [
    RuRowDirective,
  ]
})
export class RuGridsModule { }
