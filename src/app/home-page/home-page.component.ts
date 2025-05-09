import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor(private router: Router) {}
  getStarted() {
    this.router.navigate(['/login']);
  }
  redirectToLogin(){
    alert('You need to login to proceed ahead')
    this.router.navigate(['/login']);

  }
}
