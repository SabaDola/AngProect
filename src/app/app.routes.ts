import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';
import { BookingComponent } from './pages/booking/booking.component';
import { DeleteBookingComponent } from './delete-booking/delete-booking.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  { path: 'home', component: HomeComponent },
  { path: 'hotel/:id', component: HotelDetailsComponent },
  { path: 'booking/:roomId', component: BookingComponent },
  {path: 'bookings', component: BookingComponent },
  {path: 'booking' , component: DeleteBookingComponent },

];
