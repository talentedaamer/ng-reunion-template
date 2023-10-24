import { NgModule } from '@angular/core';
import {
  RuCardModule,
  RuIconCardModule,
  RuUserProfileModule
} from 'projects/ru-components/src/public-api';

@NgModule({
  imports: [
    RuCardModule,
    RuIconCardModule,
    RuUserProfileModule,
  ],
  exports: [
    RuCardModule,
    RuIconCardModule,
    RuUserProfileModule,
  ]
})
export class RuSharedModule { }
