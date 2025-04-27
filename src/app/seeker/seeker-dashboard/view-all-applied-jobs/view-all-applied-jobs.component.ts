import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-applied-jobs',
  templateUrl: './view-all-applied-jobs.component.html',
  styleUrls: ['./view-all-applied-jobs.component.css']
})
export class ViewAllAppliedJobsComponent {
    constructor(private router : Router){}
    appliedJobs = [
        {
          jobTitle: 'Frontend Developer',
          applicationDate: '2025-04-15',
          status: 'Under Review',
          deadline: '2025-05-01'
        },
        {
          jobTitle: 'UI/UX Designer Intern',
          applicationDate: '2025-04-18',
          status: 'Interview Scheduled',
          deadline: '2025-05-05'
        },
        {
          jobTitle: 'Backend Developer',
          applicationDate: '2025-04-20',
          status: 'Rejected',
          deadline: '2025-05-10'
        },
        {
          jobTitle: 'Full Stack Engineer',
          applicationDate: '2025-04-22',
          status: 'Selected',
          deadline: '2025-05-15'
        }
      ];
    
      viewDetails(job: any) {
        console.log('View details for:', job);
    this.router.navigate(['navbar/seeker/appliedJobs'])
      }
    
      deleteApplication(index: number) {
        if (confirm('Are you sure you want to delete this application?')) {
          this.appliedJobs.splice(index, 1);
        }
      }
      getStatusClass(status: string): string {
        switch (status.toLowerCase()) {
          case 'under review':
            return 'status-under-review';
          case 'interview scheduled':
            return 'status-interview-scheduled';
          case 'rejected':
            return 'status-rejected';
          case 'selected':
            return 'status-selected';
          default:
            return '';
        }
      }
}
