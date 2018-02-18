import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { VehicleService } from './vehicle.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Router } from '@angular/router';

@Injectable()
export class VehicleGuard implements CanActivate {

  constructor(private vehicleSvc: VehicleService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(next);
      console.log(state);
      return this.vehicleSvc.isAuthorizedToViewVehicleDetail(next.params['id']).map( result => {
        if (!result) { this.router.navigate(['/vehicles']); }
        return result;
      });
  }
}
