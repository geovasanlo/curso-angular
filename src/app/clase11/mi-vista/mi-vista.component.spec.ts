import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MiVistaComponent } from './mi-vista.component';

describe('MiVistaComponent', () => {
  let component: MiVistaComponent;
  let fixture: ComponentFixture<MiVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiVistaComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
