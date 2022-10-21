import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SharedModule} from "../shared/shared.module";
import { RuCardComponent } from './ru-card/ru-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RuCardComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RuCardComponent
  ]
})
export class ComponentsModule { }
