import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../core/services/hotel.service';
import { Hotel } from '../../models/hotel.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports : [CommonModule, RouterModule], // Add any necessary imports here
})
export class HomeComponent implements OnInit {
  hotels: Hotel[] = [];
  isLoading = true;
  error = '';

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe({
      next: (data) => {
        this.hotels = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'ვერ მოხერხდა სასტუმროების ჩატვირთვა';
        console.error(err);
        this.isLoading = false;
      }
    });
  }
}
