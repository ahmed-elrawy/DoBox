import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GanttCharComponent } from './gantt-chart.component';

const routes: Routes = [
  {
    path: '',
    component: GanttCharComponent
  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GanttCharRoutingModule {}

