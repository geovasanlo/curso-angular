import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MiGuardaGuard } from './mi-guarda.guard';

describe('MiGuardaGuard', () => {
  let guard: MiGuardaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(MiGuardaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
