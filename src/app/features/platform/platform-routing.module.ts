import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/shared/components/layout/layout.component';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';

let children: Routes;
children = [
  
  {
   path: '',
    component : HeaderComponent ,
    children: [
      {
        path: '',
        redirectTo: 'Kanban',
        pathMatch: 'full',
      },
      {
        path: 'Kanban',
        loadChildren: () =>
        import('./views/kanban/kanban.module').then((m) => m.KanbanModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
        import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    
      {
        path: 'gantt-chart',
        loadChildren: () =>
        import('./views/gantt-chart/gantt-chart.module').then((m) => m.GanttChartModule),
      },
    
      {
        path: 'table',
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
