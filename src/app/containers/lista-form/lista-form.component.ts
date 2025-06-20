import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ListasService } from '../../listas/service/listas.service';
import { reduce } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../listas/model/lista';

@Component({
  selector: 'app-lista-form',
  standalone: false,
  templateUrl: './lista-form.component.html',
  styleUrl: './lista-form.component.scss'
})
export class ListaFormComponent implements OnInit {


  form: FormGroup;

  constructor(

    private formBuilder: NonNullableFormBuilder,
    private service: ListasService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ){
    this.form = this.formBuilder.group({
      _id:[''],
      name:[''],
      quantity:['']
    });
  }

  ngOnInit(): void {
    const lista: Lista = this.route.snapshot.data['lista'];
    this.form.setValue({
      _id: lista._id,
      name: lista.name,
      quantity: lista.quantity
    })
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
