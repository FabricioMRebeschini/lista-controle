import { Injectable } from '@angular/core';
import { Lista }   from '../model/lista';
import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListasService {
  static list(): import("@angular/router").MaybeAsync<import("rxjs").Observable<Lista | Lista[]> | import("@angular/router").RedirectCommand> {
    throw new Error('Method not implemented.');
  }
  static loadById(id: string): import("@angular/router").MaybeAsync<import("rxjs").Observable<Lista | Lista[]> | import("@angular/router").RedirectCommand> {
    throw new Error('Method not implemented.');
  }

  private readonly API = '/api/listas';

  constructor(private httpClient:HttpClient) { }

  list(){

      return this.httpClient.get<Lista[]>(this.API).pipe(
        first(),
        delay(500),
        tap(listas => console.log(listas))
      );
      // return [
      //   {
      //     "_id": "1",
      //     "name":"Multimetro",
      //     "quantity":2
      //     }
      // ];
  }

  loadById(id: string){
    return this.httpClient.get<Lista>(`${this.API}/${id}`);
  }


  save(record: Lista){
    return this.httpClient.post<Lista>(this.API, record).pipe(first());
  }
}
