import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleGuard } from './vehicle.guard';
import { VehicleResolverService } from './vehicle-detail/vehicle-resolver.service';

const routes: Routes = [
  { path: 'vehicles/:id', component: VehicleDetailComponent, canActivate: [VehicleGuard], resolve: {vehicle: VehicleResolverService} },
  { path: 'vehicles', component: VehicleListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
