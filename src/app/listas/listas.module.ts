import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasRoutingModule } from './listas-routing.module';
import { ListasComponent } from './listas/listas.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ListaFormComponent } from './lista-form/lista-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListasComponent,
    ListaFormComponent
  ],
  imports: [
    CommonModule,
    ListasRoutingModule,
    AppMaterialModule,
    SharedModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule

  ]
})
export class ListasModule { }
