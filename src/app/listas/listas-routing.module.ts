import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListasComponent } from '../containers/listas/listas.component';
import { ListaFormComponent } from '../containers/lista-form/lista-form.component';
import { ListaResolver } from '../guards/lista.resolver';

const routes: Routes = [
  {path: '', component: ListasComponent},
  {path: 'new', component: ListaFormComponent, resolve:{lista: ListaResolver}},
  {path: 'edit/:id', component: ListaFormComponent, resolve:{lista: ListaResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListasRoutingModule { }
