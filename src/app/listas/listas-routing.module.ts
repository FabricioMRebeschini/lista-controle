import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListasComponent } from '../containers/listas/listas.component';
import { ListaFormComponent } from '../containers/lista-form/lista-form.component';

const routes: Routes = [
  {path: '', component: ListasComponent},
  {path: 'new', component: ListaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListasRoutingModule { }
