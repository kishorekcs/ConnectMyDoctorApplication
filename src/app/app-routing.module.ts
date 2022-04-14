import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardFromNavSideBarComponent } from './dashboard-from-nav-side-bar/dashboard-from-nav-side-bar.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';

const routes: Routes = [
  {path : "", component:DashboardFromNavSideBarComponent},
  // {path : "Patients"}
  // {path : "Chat-Room"}
  // {path : "Settings"}
  // {path : "", component:SideNavBarComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
