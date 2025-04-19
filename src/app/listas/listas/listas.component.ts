import { Component, OnInit } from '@angular/core';
import { Lista } from '../model/lista';
import { ListasService } from '../service/listas.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-listas',
  standalone: false,
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.scss'
})
export class ListasComponent  implements OnInit{

  listas$:Observable<Lista[]>;
  displayedColumns = ['_id','name','quantify','actions']
  //listasService: ListasService;

  constructor(
    public dialog: MatDialog,
    private listasService: ListasService){
    //this.listasService = new ListasService();
    this.listas$ = this.listasService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar dados...')

        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {

  }
}
