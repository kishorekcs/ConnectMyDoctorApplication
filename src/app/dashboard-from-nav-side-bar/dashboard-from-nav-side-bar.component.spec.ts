import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFromNavSideBarComponent } from './dashboard-from-nav-side-bar.component';

describe('DashboardFromNavSideBarComponent', () => {
  let component: DashboardFromNavSideBarComponent;
  let fixture: ComponentFixture<DashboardFromNavSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFromNavSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFromNavSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
