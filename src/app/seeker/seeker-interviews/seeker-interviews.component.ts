import { Component } from '@angular/core';
import { RescheduleInterviewComponent } from './reschedule-interview/reschedule-interview.component';
declare var bootstrap:any;
@Component({
  selector: 'app-seeker-interviews',
  templateUrl: './seeker-interviews.component.html',
  styleUrls: ['./seeker-interviews.component.css'],
})
export class SeekerInterviewsComponent {
    selectedInterview: any;
    interviews = [  ];
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
      startInterview(){
        confirm("click OK to Start Interview")
      }
}
