import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHandlerComponent } from './todo-handler.component';

describe('TodoHandlerComponent', () => {
  let component: TodoHandlerComponent;
  let fixture: ComponentFixture<TodoHandlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoHandlerComponent]
    });
    fixture = TestBed.createComponent(TodoHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
