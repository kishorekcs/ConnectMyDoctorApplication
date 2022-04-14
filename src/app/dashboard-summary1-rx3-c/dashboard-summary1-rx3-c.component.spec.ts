import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSummary1Rx3CComponent } from './dashboard-summary1-rx3-c.component';

describe('DashboardSummary1Rx3CComponent', () => {
  let component: DashboardSummary1Rx3CComponent;
  let fixture: ComponentFixture<DashboardSummary1Rx3CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSummary1Rx3CComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSummary1Rx3CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
