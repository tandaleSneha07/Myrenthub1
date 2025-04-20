// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userType: string = '';
  
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('/api/login', { username, password });
  }

  setUserType(userType: string) {
    this.userType = userType;
  }

  getUserType(): string {
    return this.userType;
  }

  navigateToDashboard() {
    if (this.userType === 'tenant') {
      this.router.navigate(['/tenant-dashboard']);
    } else if (this.userType === 'landlord') {
      this.router.navigate(['/landlord-dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
