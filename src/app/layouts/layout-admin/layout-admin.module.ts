import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutAdminRoutingModule } from './layout-admin-routing.module';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    LayoutAdminRoutingModule,
    MatSidenavModule,
    SharedModule,
  ]
})
export class LayoutAdminModule { }
