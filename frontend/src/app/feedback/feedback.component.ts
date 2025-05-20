import { Component } from '@angular/core';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
})
export class FeedbackComponent {
  feedback = { name: '', message: '' };
  submitFeedback() {
    console.log('Feedback submitted:', this.feedback);
  }
}