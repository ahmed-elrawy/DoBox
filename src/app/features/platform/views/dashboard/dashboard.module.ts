import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ResizableBarComponent } from './resizable-bar/resizable-bar.component';

import { ResizableModule } from 'angular-resizable-element';


@NgModule({
  declarations: [DashboardComponent, ResizableBarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DragDropModule,
    ResizableModule
    
  ]
})
export class DashboardModule { }
