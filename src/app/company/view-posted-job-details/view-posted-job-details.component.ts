import { Component } from '@angular/core';

@Component({
  selector: 'app-view-posted-job-details',
  templateUrl: './view-posted-job-details.component.html',
  styleUrls: ['./view-posted-job-details.component.css']
})
export class ViewPostedJobDetailsComponent {

    isEditing = false;

  jobDetails = {
    jobTitle: 'Software Engineer',
    position: 'Full-Time',
    location: 'New York, Remote',
    salary: '80,000',
    applicationDeadline: '31-12-2025',
    jobType: 'Full-Time',
    experienceLevel: 'Mid-Level',
    requiredSkills: 'JavaScript, React, Node.js',
    jobDescription: `We are looking for a skilled Software Engineer to join our team. Responsibilities include developing web applications, working with backend developers to integrate APIs, and maintaining the software. Ideal candidates should be familiar with modern frameworks such as React and Node.js.`,
    currentStatus: 'Application Open',
  };

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveDetails() {
    // You can add logic here to save the updated job details to a database or API
    alert('Job details saved!');
    this.isEditing = false;
  }
}
