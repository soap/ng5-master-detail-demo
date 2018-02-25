import { TestBed, async, inject } from '@angular/core/testing';

import { VehicleGuard } from './vehicle.guard';
import { VehicleService } from './vehicle.service';

describe('VehicleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleGuard, VehicleService]
    });
  });

  it('should ...', inject([VehicleGuard], (guard: VehicleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
