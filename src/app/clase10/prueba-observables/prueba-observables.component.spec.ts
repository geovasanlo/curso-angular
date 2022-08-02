import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaObservablesService } from '../prueba-observables.service';

import { PruebaObservablesComponent } from './prueba-observables.component';

describe('PruebaObservablesComponent', () => {
  let component: PruebaObservablesComponent;
  let fixture: ComponentFixture<PruebaObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaObservablesComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PruebaObservablesService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
