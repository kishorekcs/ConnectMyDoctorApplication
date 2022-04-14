import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardFromNavSideBarComponent } from './dashboard-from-nav-side-bar/dashboard-from-nav-side-bar.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import {MatCardModule} from '@angular/material/card';
//import {MatCardActions} from '@angular/material/card';

const routes: Routes = [
  {path : "", component:DashboardFromNavSideBarComponent},
  // {path : "Patients"}
  // {path : "Chat-Room"}
  // {path : "Settings"}
  // {path : "", component:SideNavBarComponent}
];


@NgModule({
  imports: [
    MatCardModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
