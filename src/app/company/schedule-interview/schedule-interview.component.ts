import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent {
  scheduleForm: FormGroup;

  @Input() showModal: boolean = false;
  @Input() applicant: any;
  @Input() jobTitle: string = '';
  
  @Output() closeModal = new EventEmitter<void>();
  @Output() scheduleInterview = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.scheduleForm = this.fb.group({
      candidateName: ['', Validators.required],
      jobPosition: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      meetLink: ['', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }

  onSubmit() {
    // if (this.scheduleForm.valid) {
    //   console.log('Interview Scheduled:', this.scheduleForm.value);
      alert('Interview Scheduled Successfully!');
      
      // Emit the scheduled interview details to the parent component
    //   this.scheduleInterview.emit(this.scheduleForm.value);
      this.onCloseModal();  // Close the modal after scheduling
    
  }

  onCloseModal() {
    this.closeModal.emit();  // Emit close event to the parent component
  }
}
