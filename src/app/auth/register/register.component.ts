import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      first: ['', [Validators.required, Validators.minLength(2)]],
      last: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.[A-Za-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/)
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
    if (this.registerForm.valid) {
      console.log('Form Data:', this.registerForm.value);
      alert('Registration Successful!');
    } else {
      alert('Please fill the form correctly.');
    }
  }

  // Function to navigate to the login page
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
