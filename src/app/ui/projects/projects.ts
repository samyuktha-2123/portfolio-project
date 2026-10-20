import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  projectDetails(projectId: string) {
    window.location.href = `#/projects/${projectId}`;
  }
}
