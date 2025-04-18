// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   // Base URL pointing to your Express backend
//   private baseUrl = 'http://localhost:3001/api';

//   constructor(private http: HttpClient) {}

//   // Method to call GET /api/test
//   getTest(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/test`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Base URL pointing to your Express backend
  private baseUrl = 'http://localhost:3001/api';

  constructor(private http: HttpClient) {}

  // ✅ Typed method to call GET /api/test and expect `{ message: string }`
  getTest(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.baseUrl}/test`);
  }
}
