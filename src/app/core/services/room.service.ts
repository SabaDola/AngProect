import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) {}

  getRoomsByHotelId(hotelId: number): Observable<any> {
    return this.http.get(`${'https://hotelbooking.stepprojects.ge/api/Rooms/GetAll'}?HotelId=${hotelId}`);
  }
  getRoomById(roomId: number): Observable<any> {
    return this.http.get(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${roomId}`);
  }

}
