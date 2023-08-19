import { Component, OnInit } from '@angular/core';
import { todos } from './todos';

@Component({
  selector: 'app-todo-handler',
  templateUrl: './todo-handler.component.html',
  styleUrls: ['./todo-handler.component.css'],
})
export class TodoHandlerComponent implements OnInit {
  todoList: todos[];
  constructor() {
    this.todoList = [
      {
        sno: 1,
        title: 'Print 6th sem marksheet',
        description: 'Need to submit 6th sem marksheet on monday',
        active: true,
      },
      {
        sno: 2,
        title: '5 java problems per day till d day',
        description: 'End what you started, chill out',
        active: true,
      },
      {
        sno: 3,
        title: 'UI Path',
        description: 'After 28 remember to start with UI path',
        active: true,
      },
      {
        sno: 1,
        title: 'Print 6th sem marksheet',
        description: 'Need to submit 6th sem marksheet on monday',
        active: true,
      },
      {
        sno: 2,
        title: '5 java problems per day till d day',
        description: 'End what you started, chill out',
        active: true,
      },
      {
        sno: 3,
        title: 'UI Path',
        description: 'After 28 remember to start with UI path',
        active: true,
      },
    ];
  }
  ngOnInit(): void {}

  toggleActive(todo: todos): void {
    let index: number = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
  }
}
