export interface ITask {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  tag: string;
  status: TaskStatus;
}

export type TaskStatus = 'done' | 'undone';

export type TabName = 'all' | 'done' | 'undone';
