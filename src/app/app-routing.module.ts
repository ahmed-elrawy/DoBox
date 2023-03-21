import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';


let children: Routes;
children = [
  {
    path: '',
    redirectTo: 'platform',
    pathMatch: 'full',
  },
  {
    path: 'platform',
    loadChildren: () =>
      import('./features/platform/platform.module').then((m) => m.PlatformModule),
  },
];


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
