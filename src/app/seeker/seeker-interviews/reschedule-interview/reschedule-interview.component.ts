import { Component, EventEmitter, Input, Output } from '@angular/core';

declare var bootstrap:any;

@Component({
  selector: 'app-reschedule-interview',
  templateUrl: './reschedule-interview.component.html',
  styleUrls: ['./reschedule-interview.component.css'],
})
export class RescheduleInterviewComponent {
    @Input() interviewData: any;
    @Output() onReschedule = new EventEmitter<any>();
  
    formData = {
      date: '',
      time: '',
      reason: ''
    };
  
    onSubmit() {
      alert('✅ Reschedule request submitted successfully!');
      this.onReschedule.emit({
        ...this.formData,
        applicant: this.interviewData?.applicantName || ''
      });
  
      // Optionally close modal via Bootstrap JS
      const modal = bootstrap.Modal.getInstance(document.getElementById('rescheduleModal'));
      modal?.hide();}
}
