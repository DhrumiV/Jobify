import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SeekerDashboardComponent } from './seeker/seeker-dashboard/seeker-dashboard.component';
import { SeekerInterviewsComponent } from './seeker/seeker-interviews/seeker-interviews.component';
import { SeekerJobsComponent } from './seeker/seeker-jobs/seeker-jobs.component';
import { SeekerProfileComponent } from './seeker/seeker-profile/seeker-profile.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { CompanyApplicatnsComponent } from './company/company-applicatns/company-applicatns.component';
import { CompanyListingComponent } from './company/company-listing/company-listing.component';
import { CompanyPostJobComponent } from './company/company-post-job/company-post-job.component';
import { CompanySettingComponent } from './company/company-setting/company-setting.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TrendingJobsComponent } from './seeker/seeker-dashboard/trending-jobs/trending-jobs.component';
import { AppiledJobsComponent } from './seeker/seeker-dashboard/appiled-jobs/appiled-jobs.component';
import { RescheduleInterviewComponent } from './seeker/seeker-interviews/reschedule-interview/reschedule-interview.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './guards/auth.guard';
import { TotalJobPositingComponent } from './company/company-dashboard/total-job-positing/total-job-positing.component';
import { TotalApplicationsComponent } from './company/company-dashboard/total-applications/total-applications.component';
import { ScheduledInterviewsComponent } from './company/company-dashboard/scheduled-interviews/scheduled-interviews.component';
import { TotalHiringComponent } from './company/company-dashboard/total-hiring/total-hiring.component';
import { CandidateDetailsComponent } from './company/candidate-details/candidate-details.component';
import { ViewApplicantsComponent } from './company/view-applicants/view-applicants.component';
import { ViewAllAppliedJobsComponent } from './seeker/seeker-dashboard/view-all-applied-jobs/view-all-applied-jobs.component';
import { ViewPostedJobDetailsComponent } from './company/view-posted-job-details/view-posted-job-details.component';
import { ManagePostingsComponent } from './company/manage-postings/manage-postings.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      {
        path: 'seeker',
        component: SeekerDashboardComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['seeker', 'both'] },
      },
      {
        path: 'seeker/seekerInterview',
        component: SeekerInterviewsComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['seeker', 'both'] },
      },
      {
        path: 'seeker/seekerJobs',
        component: SeekerJobsComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['seeker', 'both'] },
      },
      {
        path: 'seeker/seekerProfile',
        component: SeekerProfileComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['seeker', 'both'] },
      },
      {
        path: 'seeker/jobDetails',
        component: TrendingJobsComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['seeker', 'both'] },
      },
      {
        path: 'seeker/AllAppliedJobs',
        component: ViewAllAppliedJobsComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['seeker', 'both'] },
      },
      {
        path: 'seeker/appliedJobs',
        component: AppiledJobsComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['seeker', 'both'] },
      },
      {
        path: 'company',
        component: CompanyDashboardComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['company', 'both'] },
      },
      {
        path: 'company/totalJobs',
        component: TotalJobPositingComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['company', 'both'] },
      },
      {
        path: 'company/PostedJobDetails',
        component: ViewPostedJobDetailsComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['company', 'both'] },
      },
      
      {
        path: 'company/applicationRecieved',
        component: TotalApplicationsComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['company', 'both'] },
      },
      {
        path: 'company/schedule_interview',
        component:ScheduledInterviewsComponent ,
        canActivate: [AuthGuard],
        data: { expectedRole: ['company', 'both'] },
      },
      {
        path: 'company/hires_made',
        component:TotalHiringComponent ,
        canActivate: [AuthGuard],
        data: { expectedRole: ['company', 'both'] },
      },
      {
        path: 'company/list_candidates',
        component: ViewApplicantsComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['company', 'both'] },
      },
      {
        path: 'company/candidate_detail',
        component:CandidateDetailsComponent ,
        canActivate: [AuthGuard],
        data: { expectedRole: ['company', 'both'] },
      },
      {
        path: 'company/companyPostJob',
        component: CompanyPostJobComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['company', 'both'] },
      },
      {
        path: 'company/manage_posting',
        component: ManagePostingsComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['company', 'both'] },
      },
      {
        path: 'company/companyApplicants',
        component: CompanyApplicatnsComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['company', 'both'] },
      },
      {
        path: 'company/companySetting',
        component: CompanySettingComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: ['company', 'both'] },
      },
    ],
  },
  { path: 'Logout', component: HomePageComponent },

  // Wildcard (404)
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
