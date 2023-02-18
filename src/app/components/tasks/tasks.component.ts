import { Component } from '@angular/core';
import { Task } from '../../Task'
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks : Task[] = [];

  //in order to use a service we have to add it as a provider inside the constructor
  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tasks = this.taskService.getTasks();
  }
}
