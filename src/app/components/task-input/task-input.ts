import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask } from '../../types';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})
export class TaskInput {
  @Input() taskToEdit: ITask | null = null;

  @Output() sendTaskToParent = new EventEmitter<ITask>();

  @Output() cancelEdit = new EventEmitter<void>();

  task = {
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    tag: '',
  };

  isEditing = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['taskToEdit'] && this.taskToEdit) {
      this.task = {
        title: this.taskToEdit.title,
        description: this.taskToEdit.description,
        dueDate: this.taskToEdit.dueDate,
        priority: this.taskToEdit.priority,
        tag: this.taskToEdit.tag,
      };
      this.isEditing = true;
    }
  }

  addTask() {
    if (this.task.title.trim() === '') {
      return;
    }

    const newTask: ITask = {
      id: 0,
      title: this.task.title,
      description: this.task.description,
      dueDate: this.task.dueDate,
      priority: this.task.priority,
      tag: this.task.tag,
      status: 'undone',
    };

    this.sendTaskToParent.emit(newTask);
    this.resetForm();
  }

  onCancel() {
    this.resetForm();
    this.cancelEdit.emit();
  }

  private resetForm() {
    this.task = {
      title: '',
      description: '',
      dueDate: '',
      priority: 'Low',
      tag: '',
    };
    this.isEditing = false;
  }
}
