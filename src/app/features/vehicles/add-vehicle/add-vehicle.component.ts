import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {
  vehicle: Vehicle = new Vehicle();
  public onClose: Subject<Vehicle>;
  constructor(public bsModalRef: BsModalRef, private vSvc: VehicleService) { }

  ngOnInit() {
    this.onClose = new Subject();
  }

  save() {
    this.vSvc.addVehicle(this.vehicle).subscribe()
    this.onClose.next(this.vehicle);
    this.bsModalRef.hide();
  }

}
