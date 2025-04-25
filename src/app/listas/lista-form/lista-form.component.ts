import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-form',
  standalone: false,
  templateUrl: './lista-form.component.html',
  styleUrl: './lista-form.component.scss'
})
export class ListaFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      name:[null],
      quantity:[null]
    })
  }

  ngOnInit(): void {

  }
}
