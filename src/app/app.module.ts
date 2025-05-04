import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SeekerDashboardComponent } from './seeker/seeker-dashboard/seeker-dashboard.component';
import { SeekerInterviewsComponent } from './seeker/seeker-interviews/seeker-interviews.component';
import { SeekerJobsComponent } from './seeker/seeker-jobs/seeker-jobs.component';
import { SeekerProfileComponent } from './seeker/seeker-profile/seeker-profile.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { CompanyPostJobComponent } from './company/company-post-job/company-post-job.component';
import { CompanyListingComponent } from './company/company-listing/company-listing.component';
import { CompanyApplicatnsComponent } from './company/company-applicatns/company-applicatns.component';
import { CompanySettingComponent } from './company/company-setting/company-setting.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TrendingJobsComponent } from './seeker/seeker-dashboard/trending-jobs/trending-jobs.component';
import { AppiledJobsComponent } from './seeker/seeker-dashboard/appiled-jobs/appiled-jobs.component';
import { RescheduleInterviewComponent } from './seeker/seeker-interviews/reschedule-interview/reschedule-interview.component';
import { ApplyComponent } from './seeker/seeker-jobs/apply/apply.component';
import { TotalJobPositingComponent } from './company/company-dashboard/total-job-positing/total-job-positing.component';
import { TotalApplicationsComponent } from './company/company-dashboard/total-applications/total-applications.component';
import { TotalHiringComponent } from './company/company-dashboard/total-hiring/total-hiring.component';
import { ScheduledInterviewsComponent } from './company/company-dashboard/scheduled-interviews/scheduled-interviews.component';
import { CandidateDetailsComponent } from './company/candidate-details/candidate-details.component';
import { ViewApplicantsComponent } from './company/view-applicants/view-applicants.component';
import { ViewAllAppliedJobsComponent } from './seeker/seeker-dashboard/view-all-applied-jobs/view-all-applied-jobs.component';
import { ViewPostedJobDetailsComponent } from './company/view-posted-job-details/view-posted-job-details.component';
import { ManagePostingsComponent } from './company/manage-postings/manage-postings.component';
import { ScheduleInterviewComponent } from './company/schedule-interview/schedule-interview.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeekerDashboardComponent,
    SeekerInterviewsComponent,
    SeekerJobsComponent,
    SeekerProfileComponent,
    CompanyDashboardComponent,
    CompanyPostJobComponent,
    CompanyListingComponent,
    CompanyApplicatnsComponent,
    CompanySettingComponent,
    PagenotfoundComponent,
    TrendingJobsComponent,
    AppiledJobsComponent,
    RescheduleInterviewComponent,
    ApplyComponent,
    TotalJobPositingComponent,
    TotalApplicationsComponent,
    TotalHiringComponent,
    ScheduledInterviewsComponent,
    CandidateDetailsComponent,
    ViewApplicantsComponent,
    ViewAllAppliedJobsComponent,
    ViewPostedJobDetailsComponent,
    ManagePostingsComponent,
    ScheduleInterviewComponent

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
