import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  // You can add component logic here if needed
  // For example, dynamic data or animations
  
  experienceYears = new Date().getFullYear() - 2021; // Calculate from start year
  
  getFormattedExperience(): string {
    return `${this.experienceYears}+`;
  }
}