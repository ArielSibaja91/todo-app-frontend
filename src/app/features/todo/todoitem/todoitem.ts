import { Component, input, output } from '@angular/core';
import { Todo } from '../../../core/models/todo.model';

@Component({
  standalone: true,
  selector: 'app-todoitem',
  imports: [],
  templateUrl: './todoitem.html'
})
export class Todoitem {
  todo = input.required<Todo>();

  delete = output<number>();
  toggle = output<Todo>();

  toggleComplete() {
    const updatedTodo: Todo = {
      ...this.todo(),
      isCompleted: !this.todo().isCompleted
    };
    this.toggle.emit(updatedTodo);
  }

  onDelete() {
    this.delete.emit(this.todo().id);
  }
}
