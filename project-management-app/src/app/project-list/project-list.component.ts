import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  project: Project = { name: '', description: '', deadline: '' };

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAllProjects().subscribe(data => {
      this.projects = data;
    });
  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.loadProjects(); // Reload projects after deletion
    });
  }

 createProject() {
    this.projectService.createProject(this.project).subscribe(() => {
      alert('Project created!');
    });
  }

  // Add functions for creating and updating projects as needed
}