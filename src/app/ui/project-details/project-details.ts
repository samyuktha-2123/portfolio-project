import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Project {
  id:number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  details: string[];
}

@Component({
  selector: 'app-project-details',
  imports: [RouterLink],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss'
})
export class ProjectDetails implements OnInit {
  
  private route = inject(ActivatedRoute);

  projectId = this.route.snapshot.paramMap.get('id') ?? '';

  ngOnInit() {
    console.log('Project ID:', this.projectId);
  }

  projects: Record<string, Project> = {
    dms: {
      id:1,
      title: 'Dealer Management System',
      category: 'Enterprise Financial Application',
      description:
        'A dealer-focused financial application supporting loan management, EMI calculations and database-driven workflows.',
      technologies: [
        'Angular',
        'Angular Material',
        'Node.js',
        'PostgreSQL'
      ],
      details: [
        'Built responsive Angular interfaces for dealer and loan workflows.',
        'Integrated REST APIs for real-time financial data.',
        'Implemented database-driven workflows using PostgreSQL.',
        'Worked with reusable UI components and maintainable application architecture.'
      ]
    },

    lms: {
      id:2,
      title: 'Loan Management System',
      category: 'Financial Platform',
      description:
        'A scalable loan management solution designed around complex business logic and secure API integrations.',
      technologies: [
        'Angular',
        'NG Zorro',
        'Node.js',
        'REST APIs'
      ],
      details: [
        'Developed scalable Angular frontend features.',
        'Implemented complex financial business workflows.',
        'Integrated secure backend APIs.',
        'Focused on reusable components and maintainable code.'
      ]
    },

    'pharma-lite': {
      id:3,
      title: 'Pharma Lite',
      category: 'Healthcare Application',
      description:
        'A medical pharmacy application focused on UI/UX and frontend performance.',
      technologies: [
        'React',
        'Material UI',
        'JavaScript'
      ],
      details: [
        'Developed responsive React interfaces.',
        'Focused on improving UI/UX.',
        'Worked with Material UI components.',
        'Optimized frontend performance.'
      ]
    },

    talfa: {
      id:4,
      title: 'TALFA',
      category: 'Frontend Application',
      description:
        'A feature-rich frontend application developed from Figma designs.',
      technologies: [
        'Angular',
        'Angular Material',
        'Figma'
      ],
      details: [
        'Translated Figma designs into responsive Angular interfaces.',
        'Created reusable UI components.',
        'Focused on pixel-accurate frontend implementation.',
        'Implemented responsive layouts for different screen sizes.'
      ]
    },

    seabury: {
      id:5,
      title: 'SEABURY Labs',
      category: 'Workflow Application',
      description:
        'A workflow-heavy loan management application with seamless API communication.',
      technologies: [
        'Angular',
        'NG Zorro',
        'REST APIs'
      ],
      details: [
        'Developed workflow-heavy Angular features.',
        'Integrated APIs for seamless data communication.',
        'Built reusable frontend components.',
        'Worked with enterprise-style UI patterns.'
      ]
    }
  };

  get project(): Project | undefined {
    return this.projects[this.projectId];
  }
  
}