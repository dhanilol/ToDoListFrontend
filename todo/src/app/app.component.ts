import { Component } from '@angular/core';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  tasks = [{title: 'test'}];
  selectedTask;

  constructor(private api:ApiService) {
    this.getTasks();
    this.selectedTask = {id: -1, title: '', desc: '', done: false }
  }

  getTasks = () => {
    this.api.getAllTasks().subscribe(
      data => {
        this.tasks = data;
      },
      error => {
        console.log(error);
      },
    )
  }

  taskClicked = (task) => {
    this.api.getOneTask(task.id).subscribe(
      data => {
        this.selectedTask = data;
      },
      error => {
        console.log(error);
      },
    )
  }

  updateTask = () => {
    this.api.updateTask(this.selectedTask).subscribe(
      data => {
        this.getTasks();
      },
      error => {
        console.log(error);
      },
    )
  }

  createTask = () => {
    this.api.createTask(this.selectedTask).subscribe(
      data => {
        this.tasks.push(data);
      },
      error => {
        console.log(error);
      },
    )
  }

  deleteTask = () => {
    this.api.deleteTask(this.selectedTask.id).subscribe(
      data => {
        this.getTasks();
      },
      error => {
        console.log(error);
      },
    )
  }

}
