import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'schedule', component: ScheduleComponent}
  // {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, ContactUsComponent, DashboardComponent, ScheduleComponent]