import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { FiltroComponent } from './filtro.component';
import { HttpClient, HttpHandler } from '@angular/common/http';



describe('FiltroComponent', () => {
  let component: FiltroComponent;
  let fixture: ComponentFixture<FiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FiltroComponent],
      providers: [
        FiltroComponent,
        HttpClient,
        HttpHandler

      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
  it('should return empty', () => {
    component.posts = { status: false, data: [] }
    spyOn(component.serv, "buscarPost").and.returnValue(Promise.resolve({ status: false, data: [] }))
    component.enviarData()
    expect(component.posts.data.length).toBe(0)

  });

  it('should return posts', () => {
    let post = {
      status: true, data: [{
        "id": "03",
        "titulo": "solo leveling",
        "autor": "sung ying w",
        "correo": "sung@correo.com",
        "palabras_clave": "solo, leveling, novela, manhwa, sung",
        "descripcion": "Solo Leveling es una novela coreana escrita por Sung Ying Wo,Desde que apareció un portal que conecta nuestro mundo con un mundo lleno de monstruos y criaturas de todo tipo, algunas personas han adquirido poderes y la capacidad de cazarlos: se les llama cazadores. El protagonista de la historia, Sung Jin-Woo,1​ es el más débil de los cazadores de rango E y apenas más fuerte que un humano normal. Sus compañeros cazadores lo apodan como 'el más débil'. ",
        "img": "https://mimanga.net/img/mangas/portadas/1.jpg"
      }]
    }
    component.posts = post
    spyOn(component.serv, "buscarPost").and.returnValue(Promise.resolve(post))
    component.enviarData()
    expect(component.posts.data.length).toBe(1)

  });

  it('should return posts in refresh', () => {
    let post = {
      status: true, data: [{
        "id": "02",
        "titulo": "attack on titan",
        "autor": " hajime isayama",
        "correo": "hajisa@correo.com",
        "palabras_clave": "attack, titan, shingeki, manga, isayama",
        "descripcion": "Shingeki no Kyojin es una serie de manga japonesa escrita e ilustrada por Hajime Isayama.La historia se desarrolla en un mundo ficticio en donde la humanidad está al borde de la extinción a causa de unas criaturas humanoides llamadas «titanes», por lo que los sobrevivientes se resguardan en tres enormes murallas que impiden el acceso a los monstruos. Es así que Eren Jaeger, protagonista principal, decide unirse al «Ejército de las murallas» junto con sus amigos de la infancia, con el fin de vengar la muerte de su madre, defender los muros y liberar a la humanidad de los titanes.",
        "img": "https://somoskudasai.com/wp-content/uploads/2020/11/EoD3BdSXcAA_Kfy.jpg"
      }]
    }
    component.posts = post
    spyOn(component.serv, "buscarPost").and.returnValue(Promise.resolve(post))
    component.refresh()
    expect(component.posts.data.length).toBe(1)

  });
});
