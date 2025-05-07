import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Booking {
  id?: number;
  fullName: string;
  phone: string;
  dateFrom: string;
  dateTo: string;
  roomId: number; 
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  

  constructor(private http: HttpClient) {}

  createBooking(booking: Booking) {
    return this.http.post('https://hotelbooking.stepprojects.ge/api/Booking', booking);
  }
  deleteBooking(id: number): Observable<void> {
    return this.http.delete<void>(`${'https://hotelbooking.stepprojects.ge/api/Booking'}/${id}`);
  }
  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${'https://hotelbooking.stepprojects.ge/api/Booking/'}/GetAll`);``
  }
}
