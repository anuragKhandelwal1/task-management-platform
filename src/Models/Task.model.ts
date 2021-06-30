export interface Task {
  title: string;
  description: string;
  status: 'todo' | 'inProgress' | 'done';
}