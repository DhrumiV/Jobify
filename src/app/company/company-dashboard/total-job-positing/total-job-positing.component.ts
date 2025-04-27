import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-job-positing',
  templateUrl: './total-job-positing.component.html',
  styleUrls: ['./total-job-positing.component.css']
})
export class TotalJobPositingComponent  implements OnInit {
    constructor(private router :Router){}
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    jobPostings = [
        { 
          title: 'Software Engineer', 
          company: 'Company A', 
          location: 'Remote', 
          postedDate: new Date('2025-04-10'),
          deadline: new Date('2025-05-10'),
          hrName: 'John Doe',
          totalApplications: 50,
          position: 'Software Engineer', 
          workingMode: 'remote', 
          salary: 60000,
          experience: 3,
          skills: ['JavaScript', 'Angular', 'Node.js'],
          benefits: ['Health Insurance', 'Paid Time Off', 'Retirement Plan'],
          description: 'Develop software applications, working with front-end and back-end technologies.'
        },
        { 
          title: 'Product Manager', 
          company: 'Company A', 
          location: 'In-office', 
          postedDate: new Date('2025-04-12'),
          deadline: new Date('2025-05-15'),
          hrName: 'Jane Smith',
          totalApplications: 30,
          position: 'Product Manager', 
          workingMode: 'in-office', 
          salary: 80000,
          experience: 5,
          skills: ['Leadership', 'Product Strategy', 'Agile'],
          benefits: ['Stock Options', 'Health Insurance', 'Gym Membership'],
          description: 'Manage the product lifecycle, working with cross-functional teams to bring products to market.'
        },
        { 
          title: 'Data Scientist', 
          company: 'Company B', 
          location: 'Hybrid', 
          postedDate: new Date('2025-04-14'),
          deadline: new Date('2025-07-01'),
          hrName: 'Sarah Lee',
          totalApplications: 25,
          position: 'Data Scientist', 
          workingMode: 'hybrid', 
          salary: 70000,
          experience: 2,
          skills: ['Python', 'Machine Learning', 'SQL'],
          benefits: ['Health Insurance', 'Free Snacks', 'Flexible Hours'],
          description: 'Analyze large datasets, build models, and provide insights to drive business decisions.'
        },
        { 
          title: 'UX/UI Designer', 
          company: 'Company C', 
          location: 'Remote', 
          postedDate: new Date('2025-04-18'),
          deadline: new Date('2025-05-30'),
          hrName: 'David Green',
          totalApplications: 40,
          position: 'UX/UI Designer', 
          workingMode: 'remote', 
          salary: 75000,
          experience: 3,
          skills: ['Figma', 'Sketch', 'Prototyping', 'Wireframing'],
          benefits: ['Health Insurance', 'Paid Time Off', 'Learning & Development'],
          description: 'Design user-centric interfaces, create wireframes, and collaborate with product and engineering teams.'
        },
        { 
          title: 'Product Manager', 
          company: 'Company D', 
          location: 'In-office', 
          postedDate: new Date('2025-04-20'),
          deadline: new Date('2025-08-15'),
          hrName: 'Robert Williams',
          totalApplications: 60,
          position: 'Product Manager', 
          workingMode: 'in-office', 
          salary: 90000,
          experience: 5,
          skills: ['Leadership', 'Product Strategy', 'Agile', 'Roadmap Planning'],
          benefits: ['Stock Options', 'Health Insurance', 'Company Car'],
          description: 'Manage the entire product lifecycle, define product vision, and work with engineering teams to launch successful products.'
        },
        { 
          title: 'DevOps Engineer', 
          company: 'Company E', 
          location: 'Hybrid', 
          postedDate: new Date('2025-04-22'),
          deadline: new Date('2025-06-20'),
          hrName: 'Emily Harris',
          totalApplications: 35,
          position: 'DevOps Engineer', 
          workingMode: 'hybrid', 
          salary: 85000,
          experience: 4,
          skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
          benefits: ['Health Insurance', 'Flexible Working Hours', 'Gym Membership'],
          description: 'Design and implement infrastructure solutions, automate deployments, and manage cloud environments to improve system reliability and scalability.'
        },
        { 
          title: 'Frontend Developer', 
          company: 'Company F', 
          location: 'Remote', 
          postedDate: new Date('2025-04-25'),
          deadline: new Date('2025-07-15'),
          hrName: 'James Bond',
          totalApplications: 45,
          position: 'Frontend Developer', 
          workingMode: 'remote', 
          salary: 70000,
          experience: 2,
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          benefits: ['Health Insurance', 'Paid Time Off', 'Retirement Plan'],
          description: 'Build responsive and interactive web applications using modern front-end technologies.'
        },
        { 
          title: 'Marketing Manager', 
          company: 'Company G', 
          location: 'In-office', 
          postedDate: new Date('2025-04-28'),
          deadline: new Date('2025-09-01'),
          hrName: 'Olivia Taylor',
          totalApplications: 20,
          position: 'Marketing Manager', 
          workingMode: 'in-office', 
          salary: 75000,
          experience: 4,
          skills: ['Marketing Strategy', 'SEO', 'Social Media'],
          benefits: ['Stock Options', 'Gym Membership', 'Health Insurance'],
          description: 'Develop and execute marketing strategies to drive brand awareness and customer engagement.'
        },
        { 
          title: 'Back-End Developer', 
          company: 'Company H', 
          location: 'Hybrid', 
          postedDate: new Date('2025-05-01'),
          deadline: new Date('2025-06-25'),
          hrName: 'Benjamin Scott',
          totalApplications: 55,
          position: 'Back-End Developer', 
          workingMode: 'hybrid', 
          salary: 80000,
          experience: 3,
          skills: ['Node.js', 'Express', 'MongoDB'],
          benefits: ['Health Insurance', 'Paid Time Off', 'Flexible Hours'],
          description: 'Develop and maintain server-side logic, databases, and APIs for web applications.'
        },
        { 
          title: 'Graphic Designer', 
          company: 'Company I', 
          location: 'Remote', 
          postedDate: new Date('2025-05-03'),
          deadline: new Date('2025-07-30'),
          hrName: 'Sophia Harris',
          totalApplications: 25,
          position: 'Graphic Designer', 
          workingMode: 'remote', 
          salary: 60000,
          experience: 2,
          skills: ['Photoshop', 'Illustrator', 'Adobe XD'],
          benefits: ['Health Insurance', 'Paid Time Off', 'Learning & Development'],
          description: 'Create visual concepts and designs for websites, advertising, and branding materials.'
        }
        // Add more jobs as needed
      ];
    

    
      filters = {
        title: '',
        location: '',
        hrName: '',
        salary: null,
        postedDate: null,
        deadlineDate: null,
      };
    
      get filteredJobPostings() {
        return this.jobPostings.filter(job => {
          return (
            (this.filters.title ? job.title.toLowerCase().includes(this.filters.title.toLowerCase()) : true) &&
            (this.filters.location ? job.location.toLowerCase().includes(this.filters.location.toLowerCase()) : true) &&
            (this.filters.hrName ? job.hrName.toLowerCase().includes(this.filters.hrName.toLowerCase()) : true) &&
            (this.filters.salary ? job.salary >= this.filters.salary : true) &&
            (this.filters.postedDate ? job.postedDate >= new Date(this.filters.postedDate) : true) &&
            (this.filters.deadlineDate ? job.deadline <= new Date(this.filters.deadlineDate) : true)
          );
        });
      }
    
      // Method to handle job details view
      viewDetails(job: any) {
        console.log('View details for:', job);
        this.router.navigate(['/navbar/company/PostedJobDetails'])
        // You can implement navigation or show a modal here
      }
    
      // Method to handle job deletion
      deleteJob(job: any) {
        const index = this.jobPostings.indexOf(job);
        if (index !== -1) {
          this.jobPostings.splice(index, 1);
        }
      }
}
