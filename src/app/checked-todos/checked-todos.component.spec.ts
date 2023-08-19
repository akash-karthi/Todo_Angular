import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedTodosComponent } from './checked-todos.component';

describe('CheckedTodosComponent', () => {
  let component: CheckedTodosComponent;
  let fixture: ComponentFixture<CheckedTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckedTodosComponent]
    });
    fixture = TestBed.createComponent(CheckedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
