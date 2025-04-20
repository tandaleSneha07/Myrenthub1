import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AccountResponse {
  message: string;
  account: any; // You can define a more specific type for the account if needed
}

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'http://localhost:3001/api/account/save'; // Adjust your backend URL if necessary

  constructor(private http: HttpClient) {}

  saveAccountData(accountData: any): Observable<AccountResponse> {
    return this.http.post<AccountResponse>(this.apiUrl, accountData);
  }
}
