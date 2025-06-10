import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ListasService } from '../listas/service/listas.service';
import { Lista } from '../listas/model/lista';

@Injectable({
  providedIn: 'root'
})
export class ListaResolver implements Resolve<Lista> {

  constructor(private service: ListasService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lista> {
    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id'])
    }
    return of(...arguments,{_id:'', name: '', category:''})
  }
}
