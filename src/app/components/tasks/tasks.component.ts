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

  //now we can use this.taskService

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.taskService.getTasks().subscribe((tasks)=>this.tasks = tasks);
  }

  onDeleteTask(task: Task): void{
    this.taskService.deleteTasks(task).subscribe(()=>(this.tasks = this.tasks.filter((t)=>t.id !== task.id)))
  }

  toggleTask(task: Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task)=>this.tasks.push(task));
  }
}
