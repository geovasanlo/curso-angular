import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormularioComponent } from './formulario.component';

describe('Prueba al componente FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('El valor default del nombre debería ser Dr IQ', () => {
    expect(component.formGroupHero.get('name')?.value).toBe('Dr IQ' as any);
  });
});
