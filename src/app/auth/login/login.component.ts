

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms'; // Add this import


// @Component({
//   selector: 'app-login',
//   imports: [CommonModule,ReactiveFormsModule,FormsModule ],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })

// export class LoginComponent {
//   loginForm: FormGroup;
//   username: string = '';  // Define username
//   password: string = '';  // Define password
//   loading = false;
//   loginError = '';

//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient,
//     private router: Router
//   ) {
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   onLogin() {
//     this.loginError = '';
//     this.loading = true;
  
//     const credentials = {
//       username: this.username,
//       password: this.password
//     };
  
//     console.log("Login data:", credentials);  // 🔍 Debug here
  
//     this.http.post<any>('http://localhost:3001/api/login', credentials).subscribe({
//       next: (res) => {
//         this.loading = false;
//         alert(res.message);
//         if (res.userType === 'tenant') {
//           this.router.navigate(['/tenant-dashboard']);
//         } else if (res.userType === 'landlord') {
//           this.router.navigate(['/landlord-dashboard']);
//         }
//           else{
//             console.warn('⚠️ Unknown userType:', res.userType);

//           }
//       },
//       error: (err) => {
//         this.loading = false;
//         this.loginError = err.error.message || 'Login failed. Try again.';
//       }
//     });
//   }
  

//   navigateToRegister() {
//     this.router.navigate(['/register']);
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

    console.log("Login data:", credentials); // 🔍 Debug

    this.http.post<any>('http://localhost:3001/api/login', credentials).subscribe({
      next: (res) => {
        this.loading = false;
        alert(res.message);

        const userType = res.userType;

        if (userType === 'tenant') {
          this.router.navigate(['/tenant-dashboard']);
        } else if (userType === 'landlord') {
          this.router.navigate(['/landlord-dashboard']);
        } else {
          console.warn('⚠️ Unknown userType:', userType);
          this.loginError = 'Unknown user role. Please contact support.';
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
    this.router.navigate(['/register']);
  }
}
