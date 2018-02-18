import { Component, OnInit, TemplateRef } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html'
})
export class VehicleListComponent implements OnInit, OnDestroy {
  vehicles: Vehicle[] = [];
  totalItems = 0;
  currentPage = 1;
  numPages = 0;
  pageSize = 8;
  modalRef: BsModalRef;

  constructor(
    private vehicleSvc: VehicleService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const queryParams: Params = Object.assign({}, this.route.snapshot.queryParams);
    const subscription = this.route.queryParams.subscribe( qParams => {
      this.fetchVehicles(qParams);
    });

    if (!queryParams['page']) {
      queryParams['page'] = 1;
      queryParams['pageSize'] = this.pageSize;
      this.router.navigate(['vehicles'], { queryParams: queryParams});
    } else {
      this.pageSize = Number(queryParams['pageSize']);
      this.currentPage = Number(queryParams['page']);
      this.fetchVehicles(queryParams);
    }
  }

  ngOnDestroy() {
    // do not need to unsubscribe to router observables
  }

  fetchVehicles(qp?: Params) {
    this.vehicleSvc.getVehicles(qp).subscribe( (result) => {
      this.vehicles = result.data;
      this.totalItems = result.total;
      this.numPages = this.totalItems / this.pageSize;
    });
  }

  pageChanged($event) {
    const queryParams: Params = Object.assign({}, this.route.snapshot.queryParams);
    queryParams['page'] = $event.page;
    queryParams['pageSize'] = $event.itemsPerPage;
    this.router.navigate(['vehicles'], { queryParams: queryParams});
  }

  openAddVehicleModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(AddVehicleComponent);
    this.modalRef.content.onClose.subscribe(result => {
      console.log('results', result);
      this.vehicles.unshift(result);
    });
  }

}
