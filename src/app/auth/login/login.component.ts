
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, FormsModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   loading = false;
//   loginError = '';

//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient,
//     private router: Router,
//     private authService: AuthService 
//   ) {
//     // Initialize the form group
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

  
//   onLogin() {
//     this.loginError = '';
//     this.loading = true;
  
//     if (this.loginForm.invalid) {
//       this.loginError = 'Please fill in all fields.';
//       this.loading = false;
//       return;
//     }
  
//     const credentials = this.loginForm.value;
//     console.log("Login data:", credentials); // Debugging the login data
  
//     this.http.post<any>('http://localhost:3001/api/login', credentials).subscribe({
//       next: (res) => {
//         console.log("Response from backend:", res);  // Debugging the backend response
//         this.loading = false;
//         alert(res.message);  // Optional: Display message from backend (e.g., 'Login successful')
  
//         if (res.success) {
//           // Optionally, store userType and other details in localStorage or AuthService
//           localStorage.setItem('userType', res.userType);  // Store userType (tenant or landlord)
//           localStorage.setItem('authToken', res.authToken); // Optionally store the JWT token
  
//           // Navigate to the correct dashboard based on userType
//           if (res.userType === 'tenant') {
//             console.log('Redirecting to Tenant Dashboard');
//             this.router.navigate(['/tenant-dashboard']);  // Navigate to tenant dashboard
//           } else if (res.userType === 'landlord') {
//             console.log('Redirecting to Landlord Dashboard');
//             this.router.navigate(['/landlord-dashboard']);  // Navigate to landlord dashboard
//           } else {
//             console.warn('⚠️ Unknown userType:', res.userType);  // Log unknown userType
//             this.loginError = 'Unknown user role. Please contact support.';
//           }
//         } else {
//           this.loginError = res.message || 'Login failed. Try again.';
//         }
//       },
//       error: (err) => {
//         this.loading = false;
//         console.error('Login error:', err);
//         this.loginError = err.error?.message || 'Login failed. Try again.';
//       }
//     });
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  loginError = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    // Initialize the form group
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.loginError = '';
    this.loading = true;

    if (this.loginForm.invalid) {
      this.loginError = 'Please fill in all fields.';
      this.loading = false;
      return;
    }

    const credentials = this.loginForm.value;
    console.log("Login data:", credentials); // Debugging the login data

    this.http.post<any>('http://localhost:3001/api/login', credentials).subscribe({
      next: (res) => {
        console.log("Response from backend:", res);  // Debugging the backend response
        this.loading = false;
        alert(res.message);  // Optional: Display message from backend (e.g., 'Login successful')

        if (res.success) {
          // Optionally, store userType and other details in localStorage or AuthService
          localStorage.setItem('userType', res.userType);  // Store userType (tenant or landlord)
          localStorage.setItem('authToken', res.authToken); // Optionally store the JWT token

          // Navigate to the correct dashboard based on userType
          if (res.userType === 'tenant') {
            console.log('Redirecting to Tenant Dashboard');
            this.router.navigate(['/tenant']);  // Navigate to tenant route
          } else if (res.userType === 'landlord') {
            console.log('Redirecting to Landlord Dashboard');
            this.router.navigate(['/landlord']);  // Navigate to landlord route
          } else {
            console.warn('⚠️ Unknown userType:', res.userType);  // Log unknown userType
            this.loginError = 'Unknown user role. Please contact support.';
          }
        } else {
          this.loginError = res.message || 'Login failed. Try again.';
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Login error:', err);
        this.loginError = err.error?.message || 'Login failed. Try again.';
      }
    });
  }

  navigateToRegister() {
    // Navigate to the registration page
    this.router.navigate(['/register']);
  }
}
