import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { SpaceComponent } from './space/space.component';
import { BookingComponent } from './booking/booking.component';
import { ParkingSpaceComponent } from './parking-space/parking-space.component';

const appRoutes: Routes = [
  { path: '', pathMatch:"full", redirectTo: 'space' },
  { path: 'space', component: SpaceComponent },
  { path: 'booking',      component: BookingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SpaceComponent,
    BookingComponent,
    ParkingSpaceComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
