import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',

    title: 'Samyuktha Kurapati | Angular Developer',

    loadComponent: () => import('./ui/home/home').then((m) => m.Home),
  },

  {
    path: 'about',

    title: 'About | Samyuktha Kurapati',

    loadComponent: () => import('./ui/about/about').then((m) => m.About),
  },

  {
    path: 'skills',

    title: 'Skills | Samyuktha Kurapati',

    loadComponent: () => import('./ui/skills/skills').then((m) => m.Skills),
  },

  {
    path: 'projects/:id',
    title: 'Project Details | Samyuktha Kurapati',
    loadComponent: () =>
      import('./ui/project-details/project-details').then((m) => m.ProjectDetails),
  },
  {
    path: 'projects',
    title: 'Projects | Samyuktha Kurapati',
    loadComponent: () => import('./ui/projects/projects').then((m) => m.Projects),
  },

  {
    path: 'experience',

    title: 'Experience | Samyuktha Kurapati',

    loadComponent: () => import('./ui/experience/experience').then((m) => m.Experience),
  },

  {
    path: 'contact',

    title: 'Contact | Samyuktha Kurapati',

    loadComponent: () => import('./ui/contact/contact').then((m) => m.Contact),
  },

  {
    path: '**',

    redirectTo: '',
  },
];
