# ConsultarPosts

Proyecto de busqueda de posts registrados, realizado como prueba técnica para el puesto de Desarrollador Front-end en Facture S.A.S 

## Herramientas 

Este proyecto fue realizado con:
* [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.
* [Bootstrap](https://github.com/twbs/bootstrap) version 5.0.2

## Como clonar

Para clonar el proyecto:
* Diríjase al [Repositorio](https://github.com/GiissGuarin/Post.it) y sobre la lista de archivos, da clic en Código, o copie el siguiente link https://github.com/GiissGuarin/Post.it.git.
* Ejecute la terminal en la ubicación en donde desee clonar el directorio.
* En la terminal escriba `git clone` y ṕegue el enlace del repositorio.
```
git clone https://github.com/GiissGuarin/Post.it.git
```

## Instalación 
Para instalar las librerias y recursos que requiere el proyecto para abrir, ejectute ``` npm install ``` 

## Preview

* Vista Web

![](/evidence/vista_previa.png)

* Vista Responsive

![](/evidence/vista_previa_resp.png)


## API

Fue utilizado [JSONPlaceholder](https://jsonplaceholder.typicode.com/) como simulador de API. Para la data se utilizó el siguente [JSON de prueba](https://my-json-server.typicode.com/GiissGuarin/Post.it/posts) el cual puede ser modificado editando el JSON local db.json ubicado en la raíz del proyecto y subiendolo al repositorio. 

## Componentes

Para el desarrollo de la aplicación se desarrollaron dos componentes:
* FiltroComponent,  el cual toma y valida la data que es enviada a la API.
* Post-listComponent, el cual visualiza la data que responde a API

## Servicio 

Se creó el servicio FiltroService que hace el llamado a la API y recibe la data para visualizarla.

## Ejecución de pruebas unitarias

Ejecute `ng test` para ejecutar las pruebas unitarias a través de [Karma] (https://karma-runner.github.io).

## Evidencia de test

![](/evidence/prueba_console.png)

![](/evidence/prueba_ventana.png)


