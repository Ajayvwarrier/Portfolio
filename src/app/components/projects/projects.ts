import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Project {
  id: number;
  name: string;
  desc: string;
  tech: string[];
  type: string;
  status: string;
  year: number;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  color: string;
  hover?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  activeFilter: string = 'all';
  showProjectModal: boolean = false;
  isEditing: boolean = false;
  selectedProject: Project | null = null;
  techInput: string = '';
  
  // Sample projects - you can add/edit/remove these
  projects: Project[] = [
    {
      id: 1,
      name: 'Portfolio Website',
      desc: 'A modern, responsive portfolio website built with Angular to showcase my work and skills.',
      tech: ['Angular', 'TypeScript', 'SCSS', 'RxJS'],
      type: 'Personal Project',
      status: 'completed',
      year: 2026,
      featured: true,
      liveUrl: 'https://your-portfolio.com',
      githubUrl: 'https://github.com/yourusername/portfolio',
      color: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
    },
    {
      id: 2,
      name: 'Student Management Application',
      desc: 'A full-featured student management application with CRUD operations, filtering, and local storage.',
      tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      type: 'Personal Project',
      status: 'completed',
      year: 2025,
      featured: false,
      liveUrl: 'https://todo-app-demo.com',
      githubUrl: 'https://github.com/yourusername/todo-app',
      color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      id: 3,
      name: 'E-commerce Dashboard',
      desc: 'Admin dashboard for managing products, orders, and customers with real-time analytics.',
      tech: ['Angular', 'TypeScript', 'SQL', 'Bootstrap','C#', '.NET'],
      type: 'Client Work',
      status: 'completed',
      year: 2024,
      featured: true,
      color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
   
    
  ];

  newProject: Project = this.getEmptyProject();

  get filteredProjects() {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => 
      this.activeFilter === 'angular' ? project.tech.includes('Angular') :
      this.activeFilter === 'javascript' ? project.tech.includes('JavaScript') :
      this.activeFilter === 'fullstack' ? project.type === 'Full Stack' :
      true
    );
  }

  getInitials(name: string): string {
    return name.split(' ').map(word => word[0]).join('').toUpperCase().substring(0, 2);
  }

  getEmptyProject(): Project {
    return {
      id: 0,
      name: '',
      desc: '',
      tech: [],
      type: 'Personal Project',
      status: 'completed',
      year: new Date().getFullYear(),
      featured: false,
      color: this.getRandomGradient()
    };
  }

  getRandomGradient(): string {
    const gradients = [
      'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  }

  setActiveFilter(filter: string) {
    this.activeFilter = filter;
  }

  openAddProjectModal() {
    this.newProject = this.getEmptyProject();
    this.techInput = '';
    this.isEditing = false;
    this.showProjectModal = true;
  }

  openEditProjectModal(project: Project) {
    this.newProject = { ...project };
    this.techInput = project.tech.join(', ');
    this.isEditing = true;
    this.showProjectModal = true;
  }

  closeAddProjectModal() {
    this.showProjectModal = false;
    this.newProject = this.getEmptyProject();
    this.techInput = '';
  }

  saveProject() {
    if (!this.newProject.name || !this.newProject.desc) {
      return;
    }

    // Parse technologies
    this.newProject.tech = this.techInput
      .split(',')
      .map(tech => tech.trim())
      .filter(tech => tech.length > 0);

    if (this.isEditing) {
      // Update existing project
      const index = this.projects.findIndex(p => p.id === this.newProject.id);
      if (index !== -1) {
        this.projects[index] = { ...this.newProject };
      }
    } else {
      // Add new project
      this.newProject.id = Math.max(...this.projects.map(p => p.id)) + 1;
      this.projects.push({ ...this.newProject });
    }

    this.closeAddProjectModal();
  }

  editProject(project: Project) {
    this.openEditProjectModal(project);
  }

  confirmDeleteProject(project: Project) {
    if (confirm(`Are you sure you want to delete "${project.name}"?`)) {
      this.deleteProject(project);
    }
  }

  deleteProject(project: Project) {
    this.projects = this.projects.filter(p => p.id !== project.id);
  }

  viewProjectDetails(project: Project) {
    this.selectedProject = project;
  }

  closeProjectDetails() {
    this.selectedProject = null;
  }
}