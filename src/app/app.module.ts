import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodaysbirthdayComponent } from './todaysbirthday/todaysbirthday.component';
import { AllbirthdaysComponent } from './allbirthdays/allbirthdays.component';

@NgModule({
  declarations: [
    AppComponent,
    TodaysbirthdayComponent,
    AllbirthdaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
