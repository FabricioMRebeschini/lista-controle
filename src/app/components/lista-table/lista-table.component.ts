import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Lista } from '../../listas/model/lista';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-table',
  standalone: false,
  templateUrl: './lista-table.component.html',
  styleUrl: './lista-table.component.scss'
})
export class ListaTableComponent implements OnInit{

    @Input() listas: Lista[] = [];
    @Output() add = new EventEmitter(false);
    readonly displayedColumns = ['name','quantify','actions'];

    constructor(){};

    ngOnInit(): void {};

    onAdd(){
    //Definindo a rota e especificando a mesma raiz
    // this.router.navigate(['new'], {relativeTo: this.route});
    this.add.emit(true);
  }
}
