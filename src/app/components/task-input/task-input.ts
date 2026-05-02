import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})

export class TaskInput {
  task ={
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    tag: ''
    };
  tasks: any[] = [];
  addTask() {
    this.tasks.push({ ...this.task });
    console.log('Task added:', this.task);
    this.task = {
      title: '',
      description: '',
      dueDate: '',
      priority: 'Low',
      tag: ''
    };
  }
}
