import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentAsDocComponent } from './view-appointment-as-doc.component';

describe('ViewAppointmentAsDocComponent', () => {
  let component: ViewAppointmentAsDocComponent;
  let fixture: ComponentFixture<ViewAppointmentAsDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentAsDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentAsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
