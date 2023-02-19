import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  //function to get tasks from the component
  //add the observable as a type
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS)
    return tasks
  }
}
