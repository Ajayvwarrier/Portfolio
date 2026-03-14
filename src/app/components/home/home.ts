import { Component } from '@angular/core';
import { AboutComponent } from "../about/about";
import { SkillsComponent } from "../skills/skills";
import { ProjectsComponent } from "../projects/projects";
import { ContactComponent } from "../contact/contact";


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
 
})
export class HomeComponent {
  title: string = 'Welcome to My Portfolio';
  
  // Add any additional properties or methods you need here
}