import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/layout-admin/layout-admin.module').then(m => m.LayoutAdminModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
