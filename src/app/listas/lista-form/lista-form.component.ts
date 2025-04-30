import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListasService } from '../service/listas.service';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-lista-form',
  standalone: false,
  templateUrl: './lista-form.component.html',
  styleUrl: './lista-form.component.scss'
})
export class ListaFormComponent implements OnInit {


  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: ListasService
  ){
    this.form = this.formBuilder.group({
      name:[null],
      quantity:[null]
    })
  }

  ngOnInit(): void {

  }

    onSubmit() {
    this.service.save(this.form.value).subscribe(result => console.log(result));
    }//Parou aqui video 20 minuto 12:50

    onCancel() {
      console.log()
      }

}
