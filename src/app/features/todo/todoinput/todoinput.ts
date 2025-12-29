import { Component, inject, signal } from '@angular/core';
import { TodoService } from '../../../core/services/todo.service';

@Component({
  selector: 'app-todoinput',
  imports: [],
  templateUrl: './todoinput.html',
})
export class Todoinput {
  todoService = inject(TodoService);

  todoTitle = signal('');

  updateTitle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.todoTitle.set(input.value);
  }

  onAddTodo() {
    const title = this.todoTitle().trim();
    if (title) {
      this.todoService.addTodo(title);
      this.todoTitle.set('');
    }
  }
}
