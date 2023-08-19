import { Component, OnInit, Input } from '@angular/core';
import { todos } from './todos';

@Component({
  selector: 'app-todo-handler',
  templateUrl: './todo-handler.component.html',
  styleUrls: ['./todo-handler.component.css'],
})
export class TodoHandlerComponent implements OnInit {
  todoList: todos[];
  constructor() {
    let todosJson = localStorage.getItem('todos');
    if (todosJson) {
      this.todoList = JSON.parse(todosJson);
    } else this.todoList = [];
  }
  ngOnInit(): void {}
  addTodo(todo: todos) {
    this.todoList.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }

  toggleActive(todo: todos): void {
    todo.active = false;
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }

  deleteItem(todo: todos) {
    let index: number = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }
}
