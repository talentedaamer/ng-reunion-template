import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages/modules
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutAdminRoutingModule { }
