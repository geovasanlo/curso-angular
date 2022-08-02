import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PruebaObservablesService } from './prueba-observables.service';

describe('PruebaObservablesService', () => {
  let service: PruebaObservablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PruebaObservablesService
      ]
    });
    service = TestBed.inject(PruebaObservablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
