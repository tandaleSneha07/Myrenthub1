// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private router: Router) {}

//   canActivate(): boolean {
//     // Check if the userType exists in localStorage
//     const userType = localStorage.getItem('userType');
    
//     if (userType) {
//       return true;  // Allow access to the route if userType is found
//     } else {
//       this.router.navigate(['/login']);  // Redirect to login if not authenticated
//       return false;
//     }
//   }
// }

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth/auth.service'; // Ensure this is correctly imported

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userType = localStorage.getItem('userType');
    
    if (userType) {
      return true; // User is authenticated and has a valid userType
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false; // Deny access
    }
  }
}

