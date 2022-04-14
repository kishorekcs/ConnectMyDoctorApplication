import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { DashboardFromNavSideBarComponent } from './dashboard-from-nav-side-bar/dashboard-from-nav-side-bar.component';
import { DashboardSummary1Rx3CComponent } from './dashboard-summary1-rx3-c/dashboard-summary1-rx3-c.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ViewAppointmentAsDocComponent } from './view-appointment-as-doc/view-appointment-as-doc.component';
import { ViewAppointmentAsPatientComponent } from './view-appointment-as-patient/view-appointment-as-patient.component';
import { PatientCardComponent } from './patient-card/patient-card.component';
import { DocCardComponent } from './doc-card/doc-card.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    DashboardFromNavSideBarComponent,
    DashboardSummary1Rx3CComponent,
    TopBarComponent,
    ViewAppointmentAsDocComponent,
    ViewAppointmentAsPatientComponent,
    PatientCardComponent,
    DocCardComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
