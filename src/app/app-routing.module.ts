import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoHandlerComponent } from './todo-handler/todo-handler.component';
import { CheckedTodosComponent } from './checked-todos/checked-todos.component';

const routes: Routes = [
  { path: '', component: TodoHandlerComponent },
  { path: 'checked', component: CheckedTodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
