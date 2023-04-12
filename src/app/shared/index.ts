
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import {LayoutComponent} from './components/layout/layout.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { GanttCharComponent } from './components/gantt-chart/gantt-chart.component';
import { ResizableDirective } from './directives/resizable.directive';

/*----------------------   Pipes   ----------------------*/
export const pipes: any[] = [

];


/*----------------------   Components   ----------------------*/
export const components: any[] = [
  LayoutComponent,
  NavbarComponent,
  MainLayoutComponent,
  GanttCharComponent,

];

/*----------------------   Directives   ----------------------*/
export const directive: any[] = [
  ResizableDirective

];

