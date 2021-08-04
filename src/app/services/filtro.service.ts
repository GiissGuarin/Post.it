import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  constructor(private httpClient: HttpClient) { }

  buscarPost({ filtrar_por, palabra }): Promise<{ status: boolean, data: Array<any> }> {
    return new Promise((resolve, reject) => {
      let filtro = filtrar_por != "" ? filtrar_por : ""
      let texto = filtrar_por != "" ? "=" + palabra.toLowerCase() : ""
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
          if (result.length > 0) {
            resolve({ status: true, data: result })
          } else {
            resolve({ status: false, data: [] })
          }

        }, err => {
          resolve({ status: false, data: [] })
        })
    })
  }
}


