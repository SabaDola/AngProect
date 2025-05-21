import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthFormComponent {
  regEmail = '';
  regPassword = '';
  regMessage = '';
  logEmail = '';
  logPassword = '';
  logMessage = '';

  constructor(private http: HttpClient) {}

  register() {
    this.http.post<any>('https://reqres.in/api/register', {
      email: this.regEmail,
      password: this.regPassword
    }).subscribe({
      next: res => this.regMessage = 'რეგისტრაცია წარმატებულია! Token: ' + res.token,
      error: err => this.regMessage = err.error?.error || 'შეცდომა!'
    });
  }

  login() {
    this.http.post<any>('https://reqres.in/api/login', {
      email: this.logEmail,
      password: this.logPassword
    }).subscribe({
      next: res => this.logMessage = 'შესვლა წარმატებულია! Token: ' + res.token,
      error: err => this.logMessage = err.error?.error || 'შეცდომა!'
    });
  }
}