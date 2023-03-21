import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttCharComponent } from './gantt-chart.component';
import { GanttCharRoutingModule } from './gantt-chart-routing.module';



@NgModule({
  declarations: [GanttCharComponent],
  imports: [
    CommonModule,
    GanttCharRoutingModule
  ]
})
export class GanttChartModule { }
