import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { TaskInput } from './components/task-input/task-input';
import { TaskList } from './components/task-list/task-list';
import { Footer } from './components/footer/footer';
import { Carousel } from './components/carousel/carousel';
import { ITask } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, Carousel, TaskInput, TaskList, Footer],
})


export class App {
  tasks: ITask[] = [];
  private nextId = 1;
  editingTaskId: number | null = null;
  taskToEdit: ITask | null = null;

  onTaskReceived(task: ITask) {
    if (this.editingTaskId !== null) {
      // UPDATE
      const index = this.tasks.findIndex((t) => t.id === this.editingTaskId);
      if (index !== -1) {
        this.tasks[index] = { ...task, id: this.editingTaskId };
      }
      // reset editing state
      this.editingTaskId = null;
      this.taskToEdit = null;
    } else {
      // ADD
      task.id = this.nextId++;
      task.status = 'undone';
      this.tasks.push(task);
    }
    console.log('tasks:', this.tasks);
  }

  onMarkDone(id: number) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.status = 'done';
    }
  }

  onMarkUndone(id: number) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.status = 'undone';
    }
  }

  onDeleteTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  onEditTask(id: number) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      this.editingTaskId = id;
      this.taskToEdit = { ...task };
    }
  }

  onCancelEdit() {
    this.editingTaskId = null;
    this.taskToEdit = null;
  }
}
