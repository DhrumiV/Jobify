import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userName: string = '';
  userRole: string = '';
  currentView: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      this.userName = user.userName;
      this.userRole = user.role;
    }

    // Read role from query param or localStorage
    this.route.queryParams.subscribe((params) => {
      const roleFromParam = params['role'];
      if (roleFromParam) {
        this.currentView = roleFromParam;
        localStorage.setItem('currentView', roleFromParam);
      } else {
        this.currentView = localStorage.getItem('currentView') || 'seeker';
      }
    });
  }

  switchRole(role: string) {
    this.currentView = role;
    localStorage.setItem('currentView', role);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { role },
      queryParamsHandling: 'merge',
    });
  }
}
