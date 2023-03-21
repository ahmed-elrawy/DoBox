import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router, public auth: AuthService) {}

  logout() {
    this.auth.signOut();
    this.router.navigate(['']);
  }
}