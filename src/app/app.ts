import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todolist } from './features/todo/todolist/todolist';
import { Todoinput } from './features/todo/todoinput/todoinput';
import { TodoService } from './core/services/todo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Todolist, Todoinput],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('Todo-list-app');
  todoService = inject(TodoService);

    onRefresh() {
    this.todoService.getTodos();
  }
}
