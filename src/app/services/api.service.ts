import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Base URL pointing to your Express backend
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Method to call GET /api/test
  getTest(): Observable<any> {
    return this.http.get(`${this.baseUrl}/test`);
  }
}
