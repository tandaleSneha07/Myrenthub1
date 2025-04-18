// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-addproperty',
//   imports: [],
//   templateUrl: './addproperty.component.html',
//   styleUrl: './addproperty.component.scss'
// })
// export class AddpropertyComponent {
//   propertyForm: FormGroup;
//   selectedFiles: File[] = [];

//   constructor(private fb: FormBuilder, private http: HttpClient) {
//     this.propertyForm = this.fb.group({
//       propertyName: [''],
//       location: [''],
//       price: [''],
//       description: [''],
//       propertyType: [''],
//       landlordId: [''] // optional
//     });
//   }

//   onFileChange(event: any) {
//     this.selectedFiles = Array.from(event.target.files);
//   }

//   submitProperty() {
//     const formData = new FormData();

//     // Append form fields
//     Object.keys(this.propertyForm.value).forEach(key => {
//       formData.append(key, this.propertyForm.value[key]);
//     });

//     // Append selected files
//     this.selectedFiles.forEach(file => {
//       formData.append('images', file);
//     });

//     this.http.post('http://localhost:3001/api/properties/add', formData).subscribe({
//       next: res => console.log('Property added successfully', res),
//       error: err => console.error('Error adding property', err)
//     });
//   }
// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addproperty',
  imports: [ReactiveFormsModule],
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.scss']
})
export class AddpropertyComponent {
  propertyForm: FormGroup;
  selectedFiles: File[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.propertyForm = this.fb.group({
      propertyName: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      propertyType: ['', Validators.required],
      images: [null] // for file handling
    });
  }

  onFileChange(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }

  onSubmit() {
    if (this.propertyForm.valid) {
      const formData = new FormData();

      // Append form fields to FormData
      Object.keys(this.propertyForm.value).forEach(key => {
        if (key !== 'images') { // Don't append 'images' field itself
          formData.append(key, this.propertyForm.value[key]);
        }
      });

      // Append files to FormData
      this.selectedFiles.forEach(file => {
        formData.append('images', file);
      });

      // Make the POST request
      this.http.post('http://localhost:5000/api/properties/add', formData).subscribe(
        (res) => {
          console.log('✅ Property added:', res);
          alert('Property added successfully!');
        },
        (err) => {
          console.error('❌ Error adding property:', err);
          alert('Error submitting form.');
        }
      );
    } else {
      console.warn('⚠️ Form is invalid');
      alert('Please fill in all the required fields');
    }
  }
}

