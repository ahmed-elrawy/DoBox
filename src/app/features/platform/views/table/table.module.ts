import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './Table.component';
import { TableRoutingModule } from './table-routing.module';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableModule { }
