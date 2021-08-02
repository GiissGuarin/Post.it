import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  searchForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.searchForm = this.fb.group({
      filtrar_por: ['', [Validators.required]],
      palabra: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
  }
  buscarPost() {
    console.log(this.searchForm.value);
  }

}
