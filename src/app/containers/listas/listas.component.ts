import { Component, OnInit } from '@angular/core';
import { Lista } from '../../listas/model/lista';
import { ListasService } from '../../listas/service/listas.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  standalone: false,
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.scss'
})
export class ListasComponent  implements OnInit{

  listas$:Observable<Lista[]>;

  //listasService: ListasService;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route : ActivatedRoute,
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

  onAdd(){
    //Definindo a rota e especificando a mesma raiz
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(lista: Lista){
    this.router.navigate(['edit', lista._id], {relativeTo: this.route});
  }
}
