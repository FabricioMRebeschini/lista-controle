import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Lista } from '../model/lista';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-table',
  standalone: false,
  templateUrl: './lista-table.component.html',
  styleUrl: './lista-table.component.scss'
})
export class ListaTableComponent implements OnInit{

    @Input() listas: Lista[] = [];
    readonly displayedColumns = ['name','quantify','actions'];

    constructor(
      private router: Router,
      private route: ActivatedRoute
    ){};

    ngOnInit(): void {};

    onAdd(){
    //Definindo a rota e especificando a mesma raiz
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
