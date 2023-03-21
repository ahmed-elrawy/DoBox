import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/shared/components/layout/layout.component';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { TableComponent } from './Table.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent

  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableRoutingModule {}
