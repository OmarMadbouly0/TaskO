import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TabName } from '../../types';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() tasks: Task[] = [];

  @Output() markDone = new EventEmitter<number>();
  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<number>();

  activeTab: TabName = 'all';

  setTab(tab: TabName) {
    this.activeTab = tab;
  }

  onDone(id: number) {
    this.markDone.emit(id);
  }

  onDelete(id: number) {
    this.deleteTask.emit(id);
  }

  onEdit(id: number) {
    this.editTask.emit(id);
  }
}
