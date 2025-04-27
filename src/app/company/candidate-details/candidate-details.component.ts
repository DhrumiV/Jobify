import { Component } from '@angular/core';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent {
    candidate = {
        name: 'Dhrumi Vaidya',
        email: 'dhrumi@example.com',
        phone: '9876543210',
        experience: 2,
        skills: ['Angular', 'React', 'Node.js'],
        location: 'Surat',
        jobPosition:'Front-End Developer',
        applicationDate:'25/03/2025',
        expectedSalary: '5 LPA',
        noticePeriod: '30 days'
      };

    viewResume() {
      console.log('Viewing resume for:', this.candidate?.name);
      // Later you can open a modal or download PDF
    }
  
    contactCandidate() {
      console.log('Contacting candidate:', this.candidate?.email);
      // Maybe open mailto link or contact form
    }
  
    rejectCandidate() {
      console.log('Candidate rejected:', this.candidate?.name);
      // API call to reject or update status
    }
}
