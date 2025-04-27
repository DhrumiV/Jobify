import { Component, OnInit, Renderer2 } from '@angular/core';
import { ChartOptions, ChartDataset, ChartType } from 'chart.js';
@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {
  
  // Cancel method to handle confirmation
  cancel(): void {
    const confirmation = confirm('Click OK to cancel');
    if (confirmation) {
      // Handle the cancellation logic
      console.log('Action canceled');
    } else {
      // Handle the case when cancel is not confirmed
      console.log('Action not canceled');
    }
  }
  // Sample data for the charts
 

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    this.loadRecruitmentData();
    // Use Renderer2 for DOM manipulation (recommended in Angular)
    const todayDateElement = document.getElementById('todayDate');
    if (todayDateElement) {
      this.renderer.setProperty(todayDateElement, 'textContent', formattedDate);
    }
  }
  loadRecruitmentData(): void {}
}
