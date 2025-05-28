import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasRoutingModule } from './listas-routing.module';
import { ListasComponent } from '../containers/listas/listas.component';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ListaFormComponent } from '../containers/lista-form/lista-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaTableComponent } from '../components/lista-table/lista-table.component';


@NgModule({
  declarations: [
    ListasComponent,
    ListaFormComponent,
    ListaTableComponent
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
