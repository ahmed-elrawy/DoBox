import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanComponent } from './kanban.component';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [KanbanComponent],
  imports: [
    CommonModule,
    KanbanRoutingModule,SharedModule
  ]
})
export class KanbanModule { }
