import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleListComponent } from './features/vehicles/vehicle-list/vehicle-list.component';
import { InvalidRouteComponent } from './features/error-pages/invalid-route/invalid-route.component';

const routes: Routes = [
    { path: 'err', component: InvalidRouteComponent },
    { path: '**', redirectTo: 'err' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
