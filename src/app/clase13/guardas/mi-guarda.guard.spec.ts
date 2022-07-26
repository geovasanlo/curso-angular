import { TestBed } from '@angular/core/testing';

import { MiGuardaGuard } from './mi-guarda.guard';

describe('MiGuardaGuard', () => {
  let guard: MiGuardaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MiGuardaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
