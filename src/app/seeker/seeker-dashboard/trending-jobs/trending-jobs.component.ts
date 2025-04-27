import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-jobs',
  templateUrl: './trending-jobs.component.html',
  styleUrls: ['./trending-jobs.component.css']
})
export class TrendingJobsComponent {

    trendingJobs = [
        // {
        //   title: 'Frontend Developer',
        //   company: 'Theta Technolabs',
        //   location: 'Ahmedabad, India',
        //   website: 'https://thetatechnolabs.com',
        //   companyLogo: 'assets/i.jpg',
        //   jobType: 'Full-time',
        //   salaryRange: '₹4L - ₹6L',
        //   experience: '2+ Years',
        //   urgent: true,
        //   description: `We're looking for a talented Frontend Developer to join our team to build and scale modern, user-friendly applications.`,
        //   responsibilities: [
        //     'Develop responsive UI using HTML, CSS, JavaScript, and frameworks like React or Angular.',
        //     'Work closely with designers and backend engineers.',
        //     'Write clean, maintainable, and scalable code.'
        //   ],
        //   skills: ['JavaScript', 'React.js', 'HTML/CSS', 'Git', 'REST APIs'],
        //   perks: ['5-day work week', 'Flexible working hours', 'Health insurance', 'Performance bonuses'],
        //   aboutCompany: `Theta Technolabs is an IT solutions company based in Ahmedabad, delivering innovative digital experiences to clients across the globe.`,
        //   datePosted: new Date('2025-04-25'),
        //   deadline: new Date('2025-05-10')
        // },
        {
          title: 'UI/UX Designer',
          company: 'Design Innovations',
          location: 'Remote',
          website: 'https://designinnovations.com',
          companyLogo: 'assets/person-g1.png',
          jobType: 'Contract',
          salaryRange: '₹3L - ₹5L',
          experience: '1+ Years',
          urgent: false,
          description: `We are looking for a creative UI/UX Designer who can turn ideas into beautiful user interfaces.`,
          responsibilities: [
            'Create wireframes, mockups, and prototypes.',
            'Collaborate with developers to implement designs.',
            'Conduct user research and usability tests.'
          ],
          skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
          perks: ['Remote work', 'Flexible hours'],
          aboutCompany: `Design Innovations specializes in crafting beautiful user experiences for startups and enterprises.`,
          datePosted: new Date('2025-04-24'),
          deadline: new Date('2025-05-15')
        }
      ];
    
    selectedJobTitle: string = '';
    selectedCompany: string = '';
    selectedPostedDate: string = '';
    selectedDeadline: string = '';
  
    openJob(job:any) {
      this.selectedJobTitle = job.title;
      this.selectedCompany = job.company;
      this.selectedPostedDate = job.datePosted;
      this.selectedDeadline = job.deadline;
    }
}
