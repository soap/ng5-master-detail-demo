import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
  vehicle: Vehicle;
  vehicleForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.vehicle = this.route.snapshot.data['vehicle'];

    this.createForm();
  }

  createForm() {
    this.vehicleForm = this.formBuilder.group( {
      id: [this.vehicle.id, Validators.required],
      company: this.vehicle.company,
      make: [this.vehicle.make, Validators.required],
      model: [this.vehicle.model, Validators.required],
      trim: this.vehicle.trim,
      color: [this.vehicle.color, Validators.required],
      isAvailable: this.vehicle.isAvailable,
      cost: [this.vehicle.cost, Validators.required],
      picture: this.vehicle.picture,
      year: [this.vehicle.year],
      contact: this.vehicle.contact,
      seller: this.vehicle.seller,
      email: [this.vehicle.email, Validators.required],
      phone: this.vehicle.phone,
      address: this.vehicle.address,
      description: this.vehicle.description,
      lastSaleDate: this.vehicle.lastSaleDate,
      tags: [this.vehicle.tags],
      vin: [this.vehicle.vin, Validators.required]
    });
  }

  save() {
    alert(JSON.stringify(this.vehicle));
    this.vehicleForm.markAsPristine();
    this.vehicleForm.updateValueAndValidity();
    return false;
  }

}
