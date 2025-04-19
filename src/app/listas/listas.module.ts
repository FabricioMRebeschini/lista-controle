import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasRoutingModule } from './listas-routing.module';
import { ListasComponent } from './listas/listas.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    ListasRoutingModule,
    AppMaterialModule,
    SharedModule,
    MatMenuModule

  ]
})
export class ListasModule { }
