import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/shared/components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { PlatformComponent } from './platform.component';

let children: Routes;
children = [
  
  {
   path: '',
    component : HeaderComponent ,
    children: [
      {
        path: ':id',
        component:PlatformComponent
      },
      {
        path: ':id/kanban',
        loadChildren: () =>
        import('./views/kanban/kanban.module').then((m) => m.KanbanModule),
      },
      {
        path: ':id/dashboard',
        loadChildren: () =>
        import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    
      {
        path: ':id/table',
        loadChildren: () =>
        import('./views/table/table.module').then((m) => m.TableModule),
      },
    ]
  },
];
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}
