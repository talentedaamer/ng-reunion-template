import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSharedModule } from "../../shared/mat-shared.module";
import { LayoutAdminRoutingModule } from './layout-admin-routing.module';

// pages
import { PageDashboardComponent } from 'src/app/pages/page-dashboard/page-dashboard.component';
import { RuSharedModule } from 'src/app/shared/ru-shared.module';

@NgModule({
  declarations: [
    PageDashboardComponent,
  ],
  imports: [
    CommonModule,
    LayoutAdminRoutingModule,
    MatSharedModule,
    RuSharedModule,
  ]
})
export class LayoutAdminModule { }
