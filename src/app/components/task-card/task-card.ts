import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../types';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input() task!: Task;

  @Output() doneClicked = new EventEmitter<number>();
  @Output() deleteClicked = new EventEmitter<number>();
  @Output() editClicked = new EventEmitter<number>();

  onDone() {
    this.doneClicked.emit(this.task.id);
  }

  onDelete() {
    this.deleteClicked.emit(this.task.id);
  }

  onEdit() {
    this.editClicked.emit(this.task.id);
  }
}
