import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const expectedRoles: string[] = route.data['expectedRole']; // This will be an array of roles
    const userRole = currentUser?.role;

    // Check if the userRole is included in the expectedRoles array
    if (userRole && expectedRoles.includes(userRole)) {
      return true; // User has one of the expected roles
    }

    // If not authorized, redirect to login page
    alert('Access Denied: You are not authorized to view this page!');
    return this.router.parseUrl('/login'); // or wherever you want
  }
}
