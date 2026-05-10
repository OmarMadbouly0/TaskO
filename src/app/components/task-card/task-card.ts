import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../types';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input() task!: ITask;

  @Output() doneClicked = new EventEmitter<number>();
  @Output() undoneClicked = new EventEmitter<number>();
  @Output() deleteClicked = new EventEmitter<number>();
  @Output() editClicked = new EventEmitter<number>();

  onDone() {
    this.doneClicked.emit(this.task.id);
  }

  onUndone() {
    this.undoneClicked.emit(this.task.id);
  }

  onDelete() {
    this.deleteClicked.emit(this.task.id);
  }

  onEdit() {
    this.editClicked.emit(this.task.id);
  }
}
