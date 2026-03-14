import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  category: string;
  level: number;
  description: string;
  experience: string;
  tags: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {

  activeCategory: string = 'all';

  // 🔵 SIMPLE GRID VERSION
  simpleSkills: string[] = [
    'HTML5',
    'CSS3',
    'Bootstrap',
    'JavaScript',
    'TypeScript',
    'Angular',
    'C',
    'C++',
    'C#',
    'SQL',
    'Git',
    'GitHub'
  ];

  // 🔵 ADVANCED CARD VERSION
  skills: Skill[] = [
    {
      name: 'Angular',
      category: 'frontend',
      level: 9,
      description: 'Building scalable Single Page Applications with modern Angular',
      experience: '6+ Months',
      tags: ['Components', 'TypeScript', 'Routing']
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      level: 8,
      description: 'Strongly typed JavaScript for robust applications',
      experience: '6+ Months',
      tags: ['Interfaces', 'Generics', 'OOP']
    }
  ];

  get filteredSkills() {
    if (this.activeCategory === 'all') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.activeCategory);
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }
}