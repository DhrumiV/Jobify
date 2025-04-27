import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-applicants',
  templateUrl: './view-applicants.component.html',
  styleUrls: ['./view-applicants.component.css']
})
export class ViewApplicantsComponent {
    constructor(private router:Router){

    }
    candidates = [
        { name: 'Dhrumi Vaidya', jobRole: 'Frontend Developer' },
        { name: 'Aarav Mehta', jobRole: 'Backend Developer' },
        { name: 'Isha Patel', jobRole: 'UI/UX Designer' },
      ];
    
    //   viewApplication(candidate: any) {
    //     // You can route to the detailed application page here
    //     console.log('View Application for:', candidate);
    //     this.router.navigate(
    //         ['/navbar/company/candidate_detail', candidate.id]
    //       );

    //   }
    
      cancel(candidate: any) {
        // Confirm before rejecting
        if (confirm(`Are you sure you want to reject ${candidate.name}?`)) {
          this.candidates = this.candidates.filter(c => c !== candidate);
          console.log(`${candidate.name} has been rejected.`);
        }
      }
}
