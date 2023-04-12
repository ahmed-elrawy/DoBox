import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './Table.component';
import { TableRoutingModule } from './table-routing.module';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedModule
  ]
})
export class TableModule { }
