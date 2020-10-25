import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, Location, PathLocationStrategy } from '@angular/common';
import { TodaysbirthdayComponent } from './todaysbirthday/todaysbirthday.component';
import { AllbirthdaysComponent } from './allbirthdays/allbirthdays.component';

const routes: Routes = [
{ path: '', redirectTo: 'allbirthdays', pathMatch: 'full' },
{ path: 'todaybirthday', component: TodaysbirthdayComponent},
{ path: 'allbirthdays', component: AllbirthdaysComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class AppRoutingModule { }
