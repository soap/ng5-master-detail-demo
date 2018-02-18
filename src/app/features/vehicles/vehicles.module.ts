import { NgModule } from '@angular/core';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { CommonModule } from '@angular/common';
import { VehicleService } from './vehicle.service';
import { VehicleGuard } from './vehicle.guard';
import { VehicleResolverService } from './vehicle-detail/vehicle-resolver.service';
import { RouterModule } from '@angular/router';
import { PaginationModule, ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    VehiclesRoutingModule,
    PaginationModule,
    ModalModule
  ],
  entryComponents: [ AddVehicleComponent ],
  declarations: [VehicleListComponent, VehicleDetailComponent, AddVehicleComponent],
  exports: [VehicleListComponent, AddVehicleComponent],
  providers: [VehicleService, VehicleGuard, VehicleResolverService]
})
export class VehiclesModule { }
