import { Component, inject } from '@angular/core';
import { TodoService } from '../../../core/services/todo.service';
import { Todoitem } from '../todoitem/todoitem';
import { Todo } from '../../../core/models/todo.model';

@Component({
  standalone: true,
  selector: 'app-todolist',
  imports: [Todoitem],
  templateUrl: './todolist.html'
})
export class Todolist {
  todoService = inject(TodoService);

  onDeleteItem(id: number) {
    this.todoService.deleteTodo(id);
  }

  onToogleItem(updatedItem: Todo) {
    this.todoService.updateTodo(updatedItem.id, updatedItem);
  }

  ngOnInit() {
    this.todoService.getTodos();
  }
}
