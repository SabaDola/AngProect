import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthFormComponent } from '../../auth/auth.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule],
})
export class HeaderComponent {
  constructor(public router: Router) {}
}