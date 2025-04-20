import { Component, OnInit } from '@angular/core';
import { BookingService, Booking } from '../../core/services/booking.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  imports: [CommonModule,FormsModule],
})
export class BookingListComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings() {
    this.bookingService.getAllBookings().subscribe({
      next: (data) => this.bookings = data,
      error: (err) => console.error('შეცდომა:', err)
    });
  }

  deleteBooking(id: number) {
    if (confirm('დარწმუნებული ხარ, რომ გინდა წაშლა?')) {
      this.bookingService.deleteBooking(id).subscribe(() => {
        this.bookings = this.bookings.filter(b => b.id !== id);
      });
    }
  }
}
