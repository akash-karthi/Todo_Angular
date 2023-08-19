import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoHandlerComponent } from './todo-handler/todo-handler.component';
import { AddTodosComponent } from './add-todos/add-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoHandlerComponent,
    AddTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
