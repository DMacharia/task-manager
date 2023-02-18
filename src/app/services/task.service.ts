import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  //function to get tasks from the component
  getTasks(): Task[] {
    return TASKS
  }
}
