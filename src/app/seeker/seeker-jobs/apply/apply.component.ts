import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css'],
})
export class ApplyComponent {
  @Input() jobTitle = 'Frontend Developer';
  @Input() company = 'Prodigy Tech';
  @Input() postedDate = 'Apr 5, 2025';
  @Input() deadline = 'May 6, 2025'; 
  formData = {
    fullName: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: '',
    portfolio: '',
  };

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.formData.resume = input.files[0];
    }
  }

  submitApplication() {
    console.log('Submitted Data:', this.formData);
    alert(`Application submitted for ${this.jobTitle} at ${this.company}`);
    // Optionally close modal or send data to backend
  }
}
