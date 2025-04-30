import { Injectable } from '@angular/core';
import { Lista }   from '../model/lista';
import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListasService {

  private readonly API = '/api/listas';

  constructor(private httpClient:HttpClient) { }

  list(){

      return this.httpClient.get<Lista[]>(this.API).pipe(
        first(),
        delay(1000),
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

  save(record: Lista){
    return this.httpClient.post<Lista>(this.API, record).pipe(first());
  }
}
