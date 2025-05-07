import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../core/services/booking.service';

@Component({
  selector: 'app-delete-booking',
  imports: [FormsModule],
  templateUrl: './delete-booking.component.html',
  styleUrl: './delete-booking.component.css',
  standalone: true
})
export class DeleteBookingComponent {



  bookingId: string = ''; // Initialize bookingId to an empty string
  
  constructor(private api:BookingService) { }
   
  deleteBooking() {
    this.api.deleteBooking(Number(this.bookingId)).subscribe(
      () => {
        console.log('Booking deleted successfully');
        this.bookingId = ''; // Clear the input field after deletion
      },
      (err) => {
        console.error('Error deleting booking:', err);
        if (err.status === 200 && err.error && err.error.text) {
 
          const successMessage = err.error.text;
          const bookingIdMatch = successMessage.match(/Booking Id (\d+)/);
          const bookingId = bookingIdMatch ? bookingIdMatch[1] : 'unknown';
         
          console.log('Booking canceled Succesfuly:', successMessage);
          alert(`დაჯავშნა წარმატებით გაუქმდა! ჯავშნის ID: ${bookingId}`);
        }
        else if (err.error && err.error.message) {
          console.error('დაჯავშნის წაშლის შეცდომა შეცდომა:', err.error.message);
          alert('დაჯავშნის წაშლის შეცდომა: ' + err.error.message);
        }
        else if (err.message) {
          console.error('დაჯავშნის წაშლის შეცდომა:', err);
          alert('დაჯავშნის წაშლის შეცდომა: ' + err.message);
        }
        else {
          console.error('Unknown error:', err);
          alert('მოხდა უცნობი შეცდომა');
        }
      }
    )
  }
}
