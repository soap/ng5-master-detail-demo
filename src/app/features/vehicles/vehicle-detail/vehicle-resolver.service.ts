import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Vehicle } from '../vehicle';
import { Observable } from 'rxjs/Observable';
import { VehicleService } from '../vehicle.service';

@Injectable()
export class VehicleResolverService implements Resolve<Vehicle> {

  constructor(private vehicleSvc: VehicleService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.vehicleSvc.getVehicle(route.params['id']);
  }
}
