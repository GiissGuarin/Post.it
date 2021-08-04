import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { http_mock } from 'src/app/mocks/httpMock.mock'
import { FiltroService } from './filtro.service';
import { of } from 'rxjs';


describe('FiltroService', () => {
  let service: FiltroService;

  beforeEach(() => {
    service = new FiltroService(http_mock)
  });
  afterEach(() => {
    service = null;
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get posts with empty data', () => {
    http_mock.get.and.returnValue(of([]))
    service.buscarPost({ filtrar_por: "", palabra: "" }).then(() => {
      expect(http_mock.get).toHaveBeenCalled()
    })

  });

});
