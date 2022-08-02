import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/modulos/material/material.module';

import { MaterialEjemplosComponent } from './material-ejemplos.component';

describe('MaterialEjemplosComponent', () => {
  let component: MaterialEjemplosComponent;
  let fixture: ComponentFixture<MaterialEjemplosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialEjemplosComponent ],
      imports: [
        MatDialogModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialEjemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
