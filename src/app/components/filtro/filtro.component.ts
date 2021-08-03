import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FiltroService } from 'src/app/services/filtro.service';



@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  searchForm: FormGroup;
  @Output() dataPosts = new EventEmitter<Array<object>>();

  constructor(private serv: FiltroService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      filtrar_por: ['', [Validators.required]],
      palabra: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
    this.enviarData()

  }
  async enviarData() {
    console.log(this.searchForm.value);
    let posts: any = await this.serv.buscarPost(this.searchForm.value);
    if (posts.status) {
      this.dataPosts.emit(posts.data)
    } else {
      this.dataPosts.emit([])
      console.log("no hay nada")
    }

  }
  refresh() {
    window.location.reload();
  }

}
