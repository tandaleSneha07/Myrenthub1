import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  feedback = {
    tenantName: '',
    property: '',
    rating: 0,
    comments: '',
    suggestions: ''
  };

  constructor(private http: HttpClient) {}

  submitFeedback() {
    this.http.post('http://localhost:5000/api/feedbacks/add', this.feedback).subscribe({
      next: () => {
        alert('✅ Feedback submitted successfully!');
        this.feedback = {
          tenantName: '',
          property: '',
          rating: 0,
          comments: '',
          suggestions: ''
        };
      },
      error: (err) => {
        console.error('Feedback submission failed:', err);
        alert('❌ Failed to submit feedback.');
      }
    });
  }
}


