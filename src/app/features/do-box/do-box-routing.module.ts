import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/shared/components/layout/layout.component';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';

let children: Routes;
children = [
  {
    path: '**',
    component: NotFoundComponent,
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
export class DoBoxRoutingModule {}
