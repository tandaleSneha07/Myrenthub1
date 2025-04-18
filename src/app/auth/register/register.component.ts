// // import { Component } from '@angular/core';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { Router } from '@angular/router';
// // import { HttpClient } from '@angular/common/http'; // <-- Add this

// // @Component({
// //   selector: 'app-register',
// //   templateUrl: './register.component.html',
// //   styleUrls: ['./register.component.css']
// // })
// // export class RegisterComponent {
// //   registerForm: FormGroup;
// //   submitted = false;

// //   constructor(
// //     private fb: FormBuilder,
// //     private router: Router,
// //     private http: HttpClient // <-- Inject HTTP client
// //   ) {
// //     this.registerForm = this.fb.group({
// //       first: ['', [Validators.required, Validators.minLength(2)]],
// //       last: ['', [Validators.required, Validators.minLength(2)]],
// //       email: ['', [Validators.required, Validators.email]],
// //       password: [
// //         '',
// //         [
// //           Validators.required,
// //           Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
// //         ]
// //       ],
// //       repassword: ['', Validators.required],
// //       mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
// //       userType: ['', Validators.required]
// //     }, {
// //       validators: this.passwordMatchValidator
// //     });
// //   }

// //   passwordMatchValidator(form: FormGroup) {
// //     const password = form.get('password')?.value;
// //     const repassword = form.get('repassword')?.value;
// //     return password === repassword ? null : { mismatch: true };
// //   }

// //   onSubmit() {
// //     this.submitted = true;
// //     if (this.registerForm.valid) {
// //       const formData = {
// //         first: this.registerForm.value.first,
// //         last: this.registerForm.value.last,
// //         email: this.registerForm.value.email,
// //         password: this.registerForm.value.password,
// //         mobile: this.registerForm.value.mobile,
// //         role: this.registerForm.value.userType
// //       };

// //       // Send registration data to backend API
// //       this.http.post('http://localhost:3000/api/register', formData).subscribe({
// //         next: (res: any) => {
// //           alert('Registration successful!');
// //           this.router.navigate(['/login']);
// //         },
// //         error: (err) => {
// //           console.error(err);
// //           alert('Registration failed. Try again!');
// //         }
// //       });
// //     } else {
// //       alert('Please fill the form correctly.');
// //     }
// //   }

// //   navigateToLogin() {
// //     this.router.navigate(['/login']);
// //   }
// // }

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   registerForm: FormGroup;
//   submitted = false;

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private http: HttpClient
//   ) {
//     this.registerForm = this.fb.group({
//       first: ['', [Validators.required, Validators.minLength(2)]],
//       last: ['', [Validators.required, Validators.minLength(2)]],
//       email: ['', [Validators.required, Validators.email]],
//       password: [
//         '',
//         [
//           Validators.required,
//           Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
//         ]
//       ],
//       repassword: ['', Validators.required],
//       mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
//       userType: ['', Validators.required]
//     }, {
//       validators: this.passwordMatchValidator
//     });
//   }

//   passwordMatchValidator(form: FormGroup) {
//     const password = form.get('password')?.value;
//     const repassword = form.get('repassword')?.value;
//     return password === repassword ? null : { mismatch: true };
//   }

//   // 👇 Use this method in your form (renamed from onSubmit to onRegisterSubmit)
//   onRegisterSubmit() {
//     this.submitted = true;
//     if (this.registerForm.valid) {
//       const formData = {
//         first: this.registerForm.value.first,
//         last: this.registerForm.value.last,
//         email: this.registerForm.value.email,
//         password: this.registerForm.value.password,
//         mobile: this.registerForm.value.mobile,
//         role: this.registerForm.value.userType
//       };

//       this.http.post('http://localhost:3000/api/register', formData).subscribe({
//         next: (res: any) => {
//           alert('Registration successful!');
//           this.router.navigate(['/login']);
//         },
//         error: (err) => {
//           console.error(err);
//           alert('Registration failed. Try again!');
//         }
//       });
//     } else {
//       alert('Please fill the form correctly.');
//     }
//   }

//   navigateToLogin() {
//     this.router.navigate(['/login']);
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { catchError, of } from 'rxjs'; 

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  registrationSuccess = false; 
  registrationError: string = ''; 
  loading = false; 
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient 
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        ]
      ],
      
      
      repassword: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      userType: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const repassword = form.get('repassword')?.value;
    return password === repassword ? null : { mismatch: true };
  }

  onSubmit() {
    this.submitted = true;
    this.registrationSuccess = false; 
    this.registrationError = ''; 

    if (this.registerForm.valid) {
      this.loading = true; 
      const registrationData = this.registerForm.value;
      console.log('Registration Data:', registrationData); 

      
      this.http.post('http://localhost:3001/api/register', registrationData)
        .pipe(
          catchError((error) => {
            console.error('Registration failed:', error);
            this.registrationSuccess = false;
            this.registrationError = error.error.message || 'Registration failed. Please try again.';
            this.loading = false; 
            return of(null); 
          })
        )
        .subscribe((response: any) => {
          this.loading = false;
          if (response) {
            console.log('Registration successful:', response);
            this.registrationSuccess = true;
            this.registrationError = '';
            this.registerForm.reset();
            this.submitted = false;
          }
        });
    } else {
      alert('Please fill the form correctly.');
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   registerForm: FormGroup;
//   submitted = false;

//   constructor(private fb: FormBuilder, private router: Router) {
//     this.registerForm = this.fb.group({
//       first: ['', [Validators.required, Validators.minLength(2)]],
//       last: ['', [Validators.required, Validators.minLength(2)]],
//       email: ['', [Validators.required, Validators.email]],
//       password: [
//         '',
//         [
//           Validators.required,
//           Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
//         ]
//       ],
//       repassword: ['', Validators.required],
//       mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
//       userType: ['', Validators.required]
//     }, {
//       validators: this.passwordMatchValidator
//     });
//   }

//   passwordMatchValidator(form: FormGroup) {
//     const password = form.get('password')?.value;
//     const repassword = form.get('repassword')?.value;
//     return password === repassword ? null : { mismatch: true };
//   }

//   onSubmit() {
//     this.submitted = true;
//     if (this.registerForm.valid) {
//       console.log('Form Data:', this.registerForm.value);
//       alert('Registration Successful!');
//     } else {
//       alert('Please fill the form correctly.');
//     }
//   }

//   // Function to navigate to the login page
//   navigateToLogin() {
//     this.router.navigate(['/login']);
//   }
// }