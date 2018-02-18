import { TestBed, async, inject } from '@angular/core/testing';

import { VehicleGuard } from './vehicle.guard';

describe('VehicleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleGuard]
    });
  });

  it('should ...', inject([VehicleGuard], (guard: VehicleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
