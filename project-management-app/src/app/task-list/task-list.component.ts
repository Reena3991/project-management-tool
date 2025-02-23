import { Component, OnInit } from '@angular/core';
 import { TaskService } from '../task.service';
 import { Task } from '../task.model';

 @Component({
   selector: 'app-task-list',
   templateUrl: './task-list.component.html',
   styleUrls: ['./task-list.component.css']
 })
 export class TaskListComponent implements OnInit {
   tasks: Task[] = [];

   constructor(private taskService: TaskService) {}

   ngOnInit(): void {
     this.loadTasks();
   }

   loadTasks() {
     this.taskService.getAllTasks().subscribe(data => {
       this.tasks = data;
     });
   }

   deleteTask(id: number) {
     this.taskService.deleteTask(id).subscribe(() => {
       this.loadTasks(); // Reload tasks after deletion
     });
   }

   // Add functions for creating and updating tasks as needed
 }