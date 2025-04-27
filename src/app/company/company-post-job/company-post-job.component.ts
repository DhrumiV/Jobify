import { Component } from '@angular/core';


@Component({
  selector: 'app-company-post-job',
  templateUrl: './company-post-job.component.html',
  styleUrls: ['./company-post-job.component.css']
})
export class CompanyPostJobComponent {
    postedJob: any;

    postJob() {
      // Get form values
      const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
      const deadline = (document.getElementById('deadline') as HTMLInputElement).value;
      
      // Set the posted job
      this.postedJob = {
        title: jobTitle,
        date: new Date().toLocaleDateString(),
        deadline: deadline
      };
  
      // Optionally clear the form (if desired)
      // document.getElementById('postJobForm').reset();
    }
  
    viewJobDetails() {
      // Implement the logic for viewing job details, e.g., navigate to a job detail page
      alert('Viewing details for job: ' + this.postedJob.title);
    }
  
    cancelJobPost() {
      // Implement the logic for canceling the job post
      this.postedJob = null;
      alert('Job post canceled.');
    }
}
