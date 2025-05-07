import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookingService, Booking } from '../../core/services/booking.service';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../core/services/room.service';
 
 
 
@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  roomId!: number;
  dateFrom = new Date()
  dateTo = new Date()
  phone = ""
  fullName=""
  bookingData: any =
  {
    roomID: this.roomId,
    checkInDate: this.dateFrom,
    checkOutDate: this.dateTo,
    totalPrice: 100,
    isConfirmed: true,
    customerName: this.fullName,
    customerId: "string",
    customerPhone: this.phone
  };
 
  success = false;
  singleRoom: any;
 
  constructor(private bookingService: BookingService, private route: ActivatedRoute, private roomService: RoomService) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.roomId = params['roomId'];
      console.log(this.roomId);
      this.bookingData.roomID = this.roomId; // Set the roomId in bookingData
    
    });
  }
 
 
  ngOnInit(): void {
   this.roomService.getRoomById(this.roomId).subscribe((data) => {
      this.singleRoom = data;
      console.log(this.singleRoom);
   });
  // const id = this.route.snapshot.paramMap.get('id');
  // this.roomId = id ? Number(id) : 0;
}
 
bookRoom() {
  console.log(this.bookingData);
  this.bookingData.checkInDate = this.dateFrom
  this.bookingData.checkOutDate = this.dateTo
 
  this.bookingService.createBooking(this.bookingData).subscribe({
    next: (response) => {
 
      console.log('Response:', response);
    },
    error: (err) => {
      if (err.status === 200 && err.error && err.error.text) {
 
        const successMessage = err.error.text;
        const bookingIdMatch = successMessage.match(/Booking Id (\d+)/);
        const bookingId = bookingIdMatch ? bookingIdMatch[1] : 'unknown';
       
        console.log('Booking successful:', successMessage);
        alert(`დაჯავშნა წარმატებულია! ჯავშნის ID: ${bookingId}`);
      }
      else if (err.error && err.error.message) {
        console.error('დაჯავშნის შეცდომა:', err.error.message);
        alert('დაჯავშნის შეცდომა: ' + err.error.message);
      }
      else if (err.message) {
        console.error('დაჯავშნის შეცდომა:', err);
        alert('დაჯავშნის შეცდომა: ' + err.message);
      }
      else {
        console.error('Unknown error:', err);
        alert('მოხდა უცნობი შეცდომა');
      }
    }
  });
}
}
 