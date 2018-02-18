import { NgModule } from '@angular/core';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ErrorPagesModule } from './error-pages/error-pages.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    VehiclesModule,
    ErrorPagesModule,
    SharedModule
  ],
  exports: [
    VehiclesModule,
    ErrorPagesModule,
    SharedModule
  ],
  declarations: []
})
export class FeaturesModule { }
