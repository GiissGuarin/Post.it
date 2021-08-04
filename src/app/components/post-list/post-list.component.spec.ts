import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return empty', () => {
    component.postList = []
    expect(component.postList.length).toBe(0)

  });

  it('should return posts', () => {
    let post = [{
      "id": "03",
      "titulo": "solo leveling",
      "autor": "sung ying w",
      "correo": "sung@correo.com",
      "palabras_clave": "solo, leveling, novela, manhwa, sung",
      "descripcion": "Solo Leveling es una novela coreana escrita por Sung Ying Wo,Desde que apareció un portal que conecta nuestro mundo con un mundo lleno de monstruos y criaturas de todo tipo, algunas personas han adquirido poderes y la capacidad de cazarlos: se les llama cazadores. El protagonista de la historia, Sung Jin-Woo,1​ es el más débil de los cazadores de rango E y apenas más fuerte que un humano normal. Sus compañeros cazadores lo apodan como 'el más débil'. ",
      "img": "https://mimanga.net/img/mangas/portadas/1.jpg"
    }]

    component.postList = post
    expect(component.postList.length).toBe(1)

  });
});
