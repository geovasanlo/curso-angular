import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaObservablesService } from '../prueba-observables.service';

import { PruebaTresObservablesComponent } from './prueba-tres-observables.component';

describe('PruebaTresObservablesComponent', () => {
  let component: PruebaTresObservablesComponent;
  let fixture: ComponentFixture<PruebaTresObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaTresObservablesComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PruebaObservablesService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaTresObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
