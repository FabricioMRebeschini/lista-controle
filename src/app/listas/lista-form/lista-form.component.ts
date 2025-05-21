import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListasService } from '../service/listas.service';
import { reduce } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista-form',
  standalone: false,
  templateUrl: './lista-form.component.html',
  styleUrl: './lista-form.component.scss'
})
export class ListaFormComponent implements OnInit {


  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: ListasService,
    private snackBar: MatSnackBar,
    private location: Location
  ){
    this.form = this.formBuilder.group({
      name:[null],
      quantity:[null]
    })
  }

  ngOnInit(): void {

  }

    onSubmit() {
      // console.log(this.form.value)
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
    }

    onCancel() {
      this.location.back();
      }

    private onSuccess(){
        this.snackBar.open('Curso salvo com sucesso!', '', {duration:2000});
        this.onCancel();
    }

    private onError(){
      this.snackBar.open('Erro ao salvar curso.', '', {duration:2000});
    }

}
