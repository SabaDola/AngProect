import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HotelService } from '../../core/services/hotel.service';
import { RoomService } from '../../core/services/room.service';

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotel: any;
  rooms: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    const hotelId = Number(this.route.snapshot.paramMap.get('id'));
    this.hotelService.getHotelById(hotelId).subscribe(hotel => {
      this.hotel = hotel;
    });
    this.roomService.getRoomsByHotelId(hotelId).subscribe(rooms => {
      this.rooms = rooms;
      console.log(this.rooms);
      
    });
    
  }
  
}
