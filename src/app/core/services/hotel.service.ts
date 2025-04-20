import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  constructor(private http: HttpClient) {}
  
  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll');
  }
  
  getHotelById(id: number): Observable<any> {
    return this.http.get(`${'https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel'}/${id}`);
  }
}
