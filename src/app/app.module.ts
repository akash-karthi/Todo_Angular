import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoHandlerComponent } from './todo-handler/todo-handler.component';
import { AddTodosComponent } from './add-todos/add-todos.component';
import { FormsModule } from '@angular/forms';
import { CheckedTodosComponent } from './checked-todos/checked-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoHandlerComponent,
    AddTodosComponent,
    CheckedTodosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
