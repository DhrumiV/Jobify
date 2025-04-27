import { Component } from '@angular/core';
declare var bootstrap:any;
@Component({
  selector: 'app-company-applicatns',
  templateUrl: './company-applicatns.component.html',
  styleUrls: ['./company-applicatns.component.css']
})
export class CompanyApplicatnsComponent {
    selectedInterview: any;
    interview = [];
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
