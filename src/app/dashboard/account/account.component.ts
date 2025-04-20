// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-account',
//   imports: [],
//   templateUrl: './account.component.html',
//   styleUrl: './account.component.scss'
// })
// export class AccountComponent {

// }
// account.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './account.service';  // Import AccountService

interface AccountResponse {
  message: string;
  account: any; // You can define a more specific type for the account if needed
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountForm!: FormGroup;  // Use ! to assert that this will be initialized before use
  feedbackMessage: string = '';
  userData = { name: 'Your Name', email: 'Your Email', phone: 'Your Phone Number' };

  constructor(private fb: FormBuilder, private accountService: AccountService) {}

  ngOnInit(): void {
    // Initialize the form with necessary validators
    this.accountForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  onSave(): void {
    if (this.accountForm.invalid) {
      this.feedbackMessage = 'Please fill out all fields correctly.';
      return;
    }

    const formData = this.accountForm.value;
    console.log('Form Data:', formData); // Log form data for debugging

    // Send POST request to the backend using AccountService
    this.accountService.saveAccountData(formData).subscribe({
      next: (response: AccountResponse) => {
        this.feedbackMessage = response.message || 'Account saved successfully!';
        console.log('Server Response:', response);  // Log response
      },
      error: err => {
        this.feedbackMessage = 'Failed to save account. Please try again later.';
        console.error('Error saving account:', err);
      }
    });
  }
}
