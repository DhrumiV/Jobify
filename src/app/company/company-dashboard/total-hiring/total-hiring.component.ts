import { Component, OnInit } from '@angular/core';
interface Hire {
    name: string;
    position: string;
    hireDate: string;
    skills: string[];
  }
@Component({
  selector: 'app-total-hiring',
  templateUrl: './total-hiring.component.html',
  styleUrls: ['./total-hiring.component.css']
})
export class TotalHiringComponent implements OnInit {
    hires: Hire[] = [
        {
          name: 'John Doe',
          position: 'Software Engineer',
          hireDate: '2024-01-15',
          skills: ['JavaScript', 'Angular', 'Node.js']
        },
        {
          name: 'Jane Smith',
          position: 'UI/UX Designer',
          hireDate: '2024-02-10',
          skills: ['Figma', 'Sketch', 'CSS']
        },
        {
          name: 'Michael Brown',
          position: 'Product Manager',
          hireDate: '2024-03-20',
          skills: ['Agile', 'Leadership', 'Product Strategy']
        },
        {
          name: 'Emily Davis',
          position: 'Data Scientist',
          hireDate: '2024-04-05',
          skills: ['Python', 'Machine Learning', 'SQL']
        }
      ];
    
      ngOnInit(): void {
        // Any initialization code
      }
}
