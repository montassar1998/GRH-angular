import { TestBed } from '@angular/core/testing';

import { ControleguardGuard } from './controleguard.guard';

describe('ControleguardGuard', () => {
  let guard: ControleguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControleguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
