import { Task } from './Task.model';

export interface Category {
  id: string,
  title: string;
  tasks: Task[];
}