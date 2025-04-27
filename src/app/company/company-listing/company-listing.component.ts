import { Component, OnInit } from '@angular/core';

interface Job {
  title: string;
  datePosted: Date;
  applications: number;
  views: number;
  status: string;
}

@Component({
  selector: 'app-company-listing',
  templateUrl: './company-listing.component.html',
  styleUrls: ['./company-listing.component.css']
})
export class CompanyListingComponent  implements OnInit {
    // — full data set (replace with API call in future) —
    allJobs: Job[] = [
      { title: 'Python Developer',    datePosted: new Date('2024-01-05'), applications: 50, views: 200, status: 'Open' },
      { title: 'Frontend Developer',  datePosted: new Date('2024-01-10'), applications: 30, views: 150, status: 'Open' },
      { title: 'UI/UX Designer',      datePosted: new Date('2024-01-12'), applications: 20, views: 100, status: 'Closed' },
      { title: 'DevOps Engineer',     datePosted: new Date('2024-01-15'), applications: 10, views:  80, status: 'Draft' },
      { title: 'QA Tester',           datePosted: new Date('2024-01-18'), applications:  5, views:  50, status: 'Open' },
      { title: 'Business Analyst',    datePosted: new Date('2024-01-20'), applications:  8, views:  60, status: 'Closed' },
      { title: 'Technical Writer',    datePosted: new Date('2024-01-22'), applications:  2, views:  30, status: 'Draft' },
      { title: 'Data Scientist',      datePosted: new Date('2024-01-25'), applications: 15, views: 120, status: 'Open' }
    ];
  
    // — filter / sort state —
    searchTerm    = '';
    filterStatus  = 'All';
    sortOption    = ''; // e.g. 'dateDesc', 'applicationsDesc', 'viewsDesc'
  
    // — pagination state —
    pageSize      = 5;
    currentPage   = 1;
    totalPages    = 1;
  
    // — display subset —
    displayedJobs: Job[] = [];
  
    ngOnInit() {
      // default sort: newest first
      this.sortOption = 'dateDesc';
      this.updateDisplayedJobs();
    }
  
    /** Called on searchTerm or filterStatus change */
    onFilterChange() {
      this.currentPage = 1;
      this.updateDisplayedJobs();
    }
  
    /** Called when sort dropdown changes */
    onSortChange() {
      this.currentPage = 1;
      this.updateDisplayedJobs();
    }
  
    /** Compute filtered, sorted, paged subset */
    private updateDisplayedJobs() {
      // 1) filter
      let filtered = this.allJobs.filter(job => {
        const matchesText   = job.title.toLowerCase().includes(this.searchTerm.trim().toLowerCase());
        const matchesStatus = this.filterStatus === 'All' || job.status === this.filterStatus;
        return matchesText && matchesStatus;
      });
  
      // 2) sort
      switch (this.sortOption) {
        case 'dateAsc':
          filtered.sort((a, b) => a.datePosted.getTime() - b.datePosted.getTime());
          break;
        case 'dateDesc':
          filtered.sort((a, b) => b.datePosted.getTime() - a.datePosted.getTime());
          break;
        case 'applicationsAsc':
          filtered.sort((a, b) => a.applications - b.applications);
          break;
        case 'applicationsDesc':
          filtered.sort((a, b) => b.applications - a.applications);
          break;
        case 'viewsAsc':
          filtered.sort((a, b) => a.views - b.views);
          break;
        case 'viewsDesc':
          filtered.sort((a, b) => b.views - a.views);
          break;
      }
  
      // 3) pagination
      this.totalPages = Math.ceil(filtered.length / this.pageSize);
      const start = (this.currentPage - 1) * this.pageSize;
      this.displayedJobs = filtered.slice(start, start + this.pageSize);
    }
  
    /** Prev/Next page */
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.updateDisplayedJobs();
      }
    }
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.updateDisplayedJobs();
      }
    }
  }