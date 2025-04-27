import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seeker-jobs',
  templateUrl: './seeker-jobs.component.html',
  styleUrls: ['./seeker-jobs.component.css'],
})
export class SeekerJobsComponent {
// Variables for the selected job
  // Job data
  jobList = [
    {
      title: 'Frontend Developer',
      company: 'WebWorks',
      companyLogo: 'assets/w.jpg',
      datePosted: new Date('2025-04-20'),
      deadline: new Date('2025-05-15'),
      applications: 12
    },
    {
      title: 'UI/UX Designer',
      company: 'PixelPerfect',
      companyLogo: 'assets/person-1.jpg',
      datePosted: new Date('2025-04-22'),
      deadline: new Date('2025-05-10'),
      applications: 8
    },
    {
      title: 'Backend Developer',
      company: 'TechNest',
      companyLogo: 'assets/mind.jpg',
      datePosted: new Date('2025-04-18'),
      deadline: new Date('2025-05-05'),
      applications: 15
    },
    {
      title: 'Project Manager',
      company: 'Innovatech',
      companyLogo: 'assets/ai.jpg',
      datePosted: new Date('2025-04-21'),
      deadline: new Date('2025-05-18'),
      applications: 5
    },
    {
      title: 'DevOps Engineer',
      company: 'CloudSphere',
      companyLogo: 'assets/i.jpg',
      datePosted: new Date('2025-04-19'),
      deadline: new Date('2025-05-12'),
      applications: 10
    },
    {
      title: 'QA Engineer',
      company: 'QualityQuest',
      companyLogo: 'assets/w.jpg',
      datePosted: new Date('2025-04-17'),
      deadline: new Date('2025-05-07'),
      applications: 6
    },
    {
      title: 'Mobile App Developer',
      company: 'Appify',
      companyLogo: 'assets/ai.jpg',
      datePosted: new Date('2025-04-23'),
      deadline: new Date('2025-05-20'),
      applications: 9
    },
    {
      title: 'Business Analyst',
      company: 'DataDriven',
      companyLogo: 'assets/mind.jpg',
      datePosted: new Date('2025-04-24'),
      deadline: new Date('2025-05-22'),
      applications: 7
    },
    {
      title: 'AI/ML Engineer',
      company: 'NeuralNetics',
      companyLogo: 'assets/i.jpg',
      datePosted: new Date('2025-04-19'),
      deadline: new Date('2025-05-13'),
      applications: 14
    },
    {
      title: 'Cybersecurity Specialist',
      company: 'SafeGuard Tech',
      companyLogo: 'assets/w.jpg',
      datePosted: new Date('2025-04-18'),
      deadline: new Date('2025-05-11'),
      applications: 11
    }
  ];
  

  // Filter criteria
  filters = {
    jobTitle: '',
    datePosted: '',
    deadline: ''
  };

  // Filtered jobs based on user input
  filteredJobs() {
    return this.jobList.filter(job => {
      const matchesTitle = this.filters.jobTitle
        ? job.title.toLowerCase().includes(this.filters.jobTitle.toLowerCase())
        : true;
  
      const matchesDate = this.filters.datePosted
        ? new Date(job.datePosted).toDateString() === new Date(this.filters.datePosted).toDateString()
        : true;
  
      return matchesTitle && matchesDate;
    });
  }

  // Method to open the job apply modal
  selectedJobTitle: string = '';
  selectedCompany: string = '';
  selectedPostedDate: string = '';
  selectedDeadline: string = '';

  openJob(job: any) {
    this.selectedJobTitle = job.title;
    this.selectedCompany = job.company;
    this.selectedPostedDate = job.datePosted;
    this.selectedDeadline = job.deadline;
  }
}
