import { NgModule } from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule,} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';

import { MatTooltipModule } from "@angular/material/tooltip";
import {CdkAccordionModule} from '@angular/cdk/accordion';



const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatCardModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatMenuModule,
  MatTooltipModule,
  CdkAccordionModule
 ];

@NgModule({
  imports: [
    
  ],
  exports: [MATERIAL_MODULES],
})
export class MaterialModule { }
