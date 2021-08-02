import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  constructor(private httpClient: HttpClient) { }

  buscarPost({ filtrar_por, palabra }) {
    return new Promise((resolve, reject) => {
      let filtro = filtrar_por != "all" ? filtrar_por : ""
      let texto = filtrar_por != "all" ? "=" + palabra.toLowerCase() : ""
      this.httpClient.get(`https://my-json-server.typicode.com/GiissGuarin/Post.it/posts?${filtro}${texto}`)
        .pipe(
          map(
            (data: any) =>
              data.map((val: any) => {
                val.palabras_clave = val.palabras_clave.split(",")
                return val
              })

          )
        )
        .subscribe(result => {
          console.log(result)
          resolve({ status: true, data: result })
        }, err => {
          reject({ status: false, data: "" })
        })
    })
  }
}


