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
      level: 9,
      description: 'Strongly typed JavaScript for robust application development',
      experience: '6+ Months',
      tags: ['Static Typing', 'Interfaces', 'Generics', 'ES6+']
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      level: 9,
      description: 'Modern JavaScript with ES6+ features and best practices',
      experience: '6+ Months',
      tags: ['ES6+', 'Async/Await', 'DOM', 'APIs']
    },
    {
      name: 'HTML',
      category: 'frontend',
      level: 6,
      description: 'Semantic markup and modern HTML5 features',
      experience: '6+ Months',
      tags: ['Semantic', 'Accessibility', 'Forms', 'APIs']
    },
    {
      name: 'CSS',
      category: 'frontend',
      level: 6,
      description: 'Modern styling with Flexbox, Grid, and animations',
      experience: '6+ Months',
      tags: ['Flexbox', 'Grid', 'Animations', 'Responsive']
    },
    {
      name: 'C#',
      category: 'backend',
      level: 7,
      description: 'Object-oriented programming with .NET framework',
      experience: '6+ Months',
      tags: ['.NET', 'ASP.NET', 'OOP', 'LINQ']
    },
    {
      name: 'C++',
      category: 'backend',
      level: 6,
      description: 'Systems programming and performance-critical applications',
      experience: '6+ Months',
      tags: ['OOP', 'STL', 'Memory Mgmt', 'Algorithms']
    },
    {
      name: 'C',
      category: 'backend',
      level: 6,
      description: 'Low-level programming and embedded systems',
      experience: '6+ Months',
      tags: ['Pointers', 'Memory', 'System Calls', 'Algorithms']
    },
    {
      name: 'SQL',
      category: 'backend',
      level: 8,
      description: 'Database design, queries, and optimization',
      experience: '6+ Months',
      tags: ['MySQL', 'PostgreSQL', 'Queries', 'Indexing']
    },
    {
      name: 'Dot NET & MVC',
      category: 'tools',
      level: 4,
      description: 'Microsoft .NET framework and MVC architecture',
      experience: '6+ Months',
      tags: ['Observables', 'Operators', 'Streams', 'Async']
    },
    {
      name: 'Git',
      category: 'tools',
      level: 9,
      description: 'Version control and collaborative development',
      experience: '1+ years',
      tags: ['GitHub', 'GitLab', 'CI/CD', 'Workflow']
    },
    {
      name: 'Node.js',
      category: 'backend',
      level: 7,
      description: 'Server-side JavaScript runtime',
      experience: '6+ Months',
      tags: ['Express', 'NPM', 'REST APIs', 'Modules']
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

  highlightSkill(skill: Skill) {
    // You can add highlight logic here if needed
    console.log('Highlighting:', skill.name);
  }

  unhighlightSkill() {
    // You can add unhighlight logic here if needed
  }

  getSkillCount(): number {
    return this.skills.length;
  }

  getAverageProficiency(): number {
    const total = this.skills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / this.skills.length);
  }
}