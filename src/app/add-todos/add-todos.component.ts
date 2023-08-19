import { Component, EventEmitter, Output } from '@angular/core';
import { todos } from '../todo-handler/todos';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css'],
})
export class AddTodosComponent {
  @Output() todo: EventEmitter<todos> = new EventEmitter();
  title: string = '';
  description: string = '';
  addTodo(): void {
    let todoItem: todos = {
      title: this.title,
      description: this.description,
      active: true,
    };
    this.todo.emit(todoItem);
  }
}
