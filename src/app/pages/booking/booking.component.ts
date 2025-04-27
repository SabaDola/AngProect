import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookingService, Booking } from '../../core/services/booking.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  roomId!: number;
  bookingData: any = 
  {
    "roomID": this.roomId,
    "checkInDate": "2026-03-16T14:14:22.811Z",
    "checkOutDate": "2026-04-16T14:14:22.811Z",
    "totalPrice": 0,
    "isConfirmed": true,
    "customerName": "string",
    "customerId": "string",
    "customerPhone": "string"
  };
  
  success = false;

  constructor(private bookingService: BookingService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.roomId = params['roomId'];
    });
  }


  ngOnInit(): void {
  // const id = this.route.snapshot.paramMap.get('id');
  // this.roomId = id ? Number(id) : 0;
}

bookRoom() {
  console.log(this.bookingData); // ← აქ ნახე JSON-ი
  this.bookingService.createBooking(this.bookingData).subscribe(resp=>console.log(resp)
    
    // next: () => alert('დაჯავშნა წარმატებულია'),
    // error: (err) => {
    //   console.error('დაჯავშნის შეცდომა:', err);
    //   alert('დაჯავშნის შეცდომა: ' + err.error?.message || err.message);
    // }
  );
}
}
