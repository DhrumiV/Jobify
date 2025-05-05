import { Component } from '@angular/core';
interface TrendingJob {
    title: string;
    icon: string;
  }
  
  interface AppliedJob {
    title: string;
    date: Date;
    status: 'Accepted' | 'Pending' | 'Rejected';
  }
  
  interface Section {
    type: 'experience' | 'internship' | 'achievement';
    label: string;
    data: any;
  }
  
@Component({
  selector: 'app-seeker-dashboard',
  templateUrl: './seeker-dashboard.component.html',
  styleUrls: ['./seeker-dashboard.component.css']
})
export class SeekerDashboardComponent {
    trendingJobs: TrendingJob[] = [
        { title: 'UI/UX Designer', icon: 'bi bi-laptop text-primary' },
        { title: 'Front-end Dev.',    icon: 'bi bi-braces text-warning' },
        { title: 'Full Stack Dev.',   icon: 'bi bi-stack text-success' },
        { title: 'Data Analyst',      icon: 'bi bi-bar-chart-line text-info' }
      ];
    
      appliedJobs: AppliedJob[] = [
        { title: 'Python Developer', date: new Date('2024-01-12'), status: 'Pending'  },
        { title: 'UI/UX Designer',   date: new Date('2024-01-10'), status: 'Accepted' },
        { title: 'DevOps Engineer',  date: new Date('2024-01-15'), status: 'Rejected' }
      ];
    
      profileSections: Section[] = [];
    
      addSection(type: Section['type']) {
        const section: Section = {
          type,
          label: this.getLabel(type),
          data: this.getDefaultData(type)
        };
        this.profileSections.push(section);
      }
    
      removeSection(index: number) {
        this.profileSections.splice(index, 1);
      }
    
      getLabel(type: Section['type']): string {
        switch (type) {
          case 'experience':  return 'Experience';
          case 'internship': return 'Internship';
          case 'achievement': return 'Achievement';
        }
      }
    
      getDefaultData(type: Section['type']): any {
        switch (type) {
          case 'experience':  return { company: '', role: '' };
          case 'internship': return { company: '', duration: '' };
          case 'achievement': return { achievement: '' };
        }
      }
    
      saveProfileDetails() {
        console.log('Saved Profile Sections:', this.profileSections);
        // TODO: send to API
      }
    
      uploadResume() {
        console.log('Resume upload clicked');
        // TODO: open file picker & upload
      }
    
      uploadCV() {
        console.log('CV upload clicked');
        // TODO: open file picker & upload
      }
    }
