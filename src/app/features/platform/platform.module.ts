import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformRoutingModule } from './platform-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { PlatformComponent } from './platform.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PlatformComponent
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule
  ]
})
export class PlatformModule { }
