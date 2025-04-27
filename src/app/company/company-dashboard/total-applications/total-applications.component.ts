import { Component } from '@angular/core';

@Component({
  selector: 'app-total-applications',
  templateUrl: './total-applications.component.html',
  styleUrls: ['./total-applications.component.css']
})
export class TotalApplicationsComponent {
    selectedApplicant: any = null;

    jobApplications = [
      {
        title: 'Frontend Developer',
        applicants: [
          {
            name: 'Karan Sharma',
            dateApplied: new Date('2025-04-05'),
            skills: ['HTML', 'CSS', 'Angular'],
            experience: 2,
            introduction: 'I am passionate about UI/UX and modern frontend frameworks.',
            resumeUrl: 'assets/resumes/karan_resume.pdf',
            email: 'karan.sharma@example.com',  // Example contact info
            phone: '1234567890'  // Example contact info
          },
          {
            name: 'Anjali Patel',
            dateApplied: new Date('2025-04-08'),
            skills: ['JavaScript', 'React'],
            experience: 1.5,
            introduction: 'Quick learner and React enthusiast.',
            resumeUrl: 'assets/resumes/anjali_resume.pdf',
            email: 'anjali.patel@example.com',  // Example contact info
            phone: '0987654321'  // Example contact info
          }
        ]
      },
      {
        title: 'Backend Developer',
        applicants: [
          {
            name: 'Rohit Mehta',
            dateApplied: new Date('2025-04-06'),
            skills: ['Node.js', 'MongoDB', 'Express'],
            experience: 3,
            introduction: 'Love building APIs and scalable systems.',
            resumeUrl: 'assets/resumes/rohit_resume.pdf',
            email: 'rohit.mehta@example.com',  // Example contact info
            phone: '1122334455'  // Example contact info
          }
        ]
      }
    ];
    
    toggleApplication(applicant: any) {
      this.selectedApplicant = this.selectedApplicant === applicant ? null : applicant;
    }
  
    contactApplicant(applicant: any): void {
      alert(`Contact of Applicant: ${applicant.phone}`);
      // If you want to open the email client:
      // const email = applicant.email;
      // window.location.href = `mailto:${email}`;
    }
  
    scheduleInterview(applicant: any, job: any): void {
      alert(`Scheduling interview with ${applicant.name} for position: ${job.title}`);
      // Or you could redirect to a calendar page or open a modal for scheduling
      // Example:
      // window.location.href = `your-calendar-url?applicant=${applicant.name}`;
    }
}
