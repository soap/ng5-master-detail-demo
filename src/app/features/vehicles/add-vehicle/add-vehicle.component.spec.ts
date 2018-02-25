import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleComponent } from './add-vehicle.component';
import { FormsModule } from '@angular/forms';
import { BsModalRef, ModalModule } from 'ngx-bootstrap';
import { VehicleService } from '../vehicle.service';

describe('AddVehicleComponent', () => {
  let component: AddVehicleComponent;
  let fixture: ComponentFixture<AddVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicleComponent ],
      imports: [ FormsModule,  ModalModule ],
      providers: [BsModalRef, VehicleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
