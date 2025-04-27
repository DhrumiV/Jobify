import { Component } from '@angular/core';
declare var bootstrap:any;

@Component({
  selector: 'app-scheduled-interviews',
  templateUrl: './scheduled-interviews.component.html',
  styleUrls: ['./scheduled-interviews.component.css']
})
export class ScheduledInterviewsComponent {
    selectedInterview: any;
    interviews = [
        {
          jobTitle: 'Frontend Developer',
          applicantName: 'Riya Patel',
          skills: ['HTML', 'CSS', 'Angular'],
          experience: 2,
          applicationDate: new Date('2025-04-05'),
          interviewDate: new Date('2025-04-15'),
          interviewTime: '10:00 AM',
          requestMessage: '',
          resumeUrl: 'assets/demo-resume.pdf'
        },
        {
          jobTitle: 'Data Analyst',
          applicantName: 'Amit Sharma',
          skills: ['Excel', 'PowerBI', 'Python'],
          experience: 3,
          applicationDate: new Date('2025-04-06'),
          interviewDate: new Date('2025-04-17'),
          interviewTime: '02:00 PM',
          requestMessage: 'I am not available at 2 PM, can we shift to 4 PM?',
          resumeUrl: 'assets/demo_resume.pdf'
        }
      ];
    
      openRescheduleModal(interview: any) {
        this.selectedInterview = interview;
        const modalEl = document.getElementById('rescheduleModal');
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
      }
      
      handleReschedule(data: any) {
        console.log('Reschedule info:', data);}
      viewResume(url: string) {
        window.open(url, '_blank');
      }
}
