import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockapiService } from '../../servicios/mockapi.service';

import { ListaPersonajesComponent } from './lista-personajes.component';

describe('ListaPersonajesComponent', () => {
  let component: ListaPersonajesComponent;
  let fixture: ComponentFixture<ListaPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPersonajesComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MockapiService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
