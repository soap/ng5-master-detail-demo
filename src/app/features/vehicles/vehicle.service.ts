import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from './vehicle';
import 'rxjs/add/observable/of';
import { Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../config/config.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  params: {}
};

@Injectable()
export class VehicleService {
  vehicleServiceUrl = 'http://localhost:5001/v1/vehicles';
  vehicles: Vehicle[] = [];

  constructor(private http: HttpClient, private cfg: ConfigService) { }

  getVehicles(qp?: Params): Observable<{data: Vehicle[], total: number}> {
    httpOptions.params = qp;
    return this.http.get<{data: Vehicle[], total: number}>(this.vehicleServiceUrl, httpOptions);

  }

  getVehicle(id: string): Observable<Vehicle> {
    return Observable.of(this.vehicles.find( v => v._id === id));
  }

  getMakes(): Observable<string[]> {
    return Observable.of( ['Ford', 'Nissan', 'Chevy', 'Acura', 'Lexus', 'Honda', 'Toyota', 'Skoda']);
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    this.vehicles.unshift(vehicle);
    return Observable.of(vehicle);
  }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    let foundVehicle = this.vehicles.find((v) => v._id === vehicle._id);
    if (foundVehicle) {
      foundVehicle = vehicle;
      return Observable.of(foundVehicle);
    }
    return null;
  }

  isAuthorizedToViewVehicleDetail(id: string): Observable<boolean> {
    const foundVehicle = this.vehicles.find( v => v._id === id);
    return Observable.of(foundVehicle !== undefined);
  }

}
