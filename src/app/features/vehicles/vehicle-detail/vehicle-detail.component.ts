import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
  vehicle: Vehicle;
  vehicleForm: FormGroup;
  makes: string[] = [];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private vehcileService: VehicleService) { }

  ngOnInit() {
    this.vehicle = this.route.snapshot.data['vehicle'];
    this.vehcileService.getMakes().subscribe( makes => this.makes = makes);
    this.createForm();
  }

  createForm() {
    this.vehicleForm = this.formBuilder.group( {
      id: [this.vehicle._id, Validators.required],
      make: [this.vehicle.make, Validators.required],
      model: [this.vehicle.model, Validators.required],
      color: [this.vehicle.color, Validators.required],
      cost: [this.vehicle.cost, Validators.required],
      description: this.vehicle.description,
      vin: [this.vehicle.vin, Validators.required]
    });
  }

  save() {
    this.vehcileService.updateVehicle(this.vehicleForm.value).subscribe( result => {
      this.vehicleForm.markAsPristine();
      this.vehicleForm.updateValueAndValidity();
      this.router.navigate(['/vehicles']);
    });
  }

  cancel() {
    this.router.navigate(['/vehicles']);
  }

}
