import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages/modules
import { PageDashboardComponent } from 'src/app/pages/page-dashboard/page-dashboard.component';

const routes: Routes = [
  {
    path: 'page-dashboard',
    component: PageDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutAdminRoutingModule { }
