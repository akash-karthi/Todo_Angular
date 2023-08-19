import { Component } from '@angular/core';
import { todos } from '../todo-handler/todos';

@Component({
  selector: 'app-checked-todos',
  templateUrl: './checked-todos.component.html',
  styleUrls: ['./checked-todos.component.css'],
})
export class CheckedTodosComponent {
  todoList: todos[];
  constructor() {
    let todosJson = localStorage.getItem('todos');
    if (todosJson) {
      this.todoList = JSON.parse(todosJson);
    } else this.todoList = [];
  }
  deleteItem(todo: todos) {
    let index: number = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }
}
