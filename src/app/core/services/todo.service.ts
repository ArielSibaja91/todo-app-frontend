import { inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "../models/todo.model";

@Injectable({ providedIn: 'root' })
export class TodoService {
    private http = inject(HttpClient);
    private apiUrl = 'https://localhost:7239/api/todoes';

    #todos = signal<Todo[]>([]);
    todos = this.#todos.asReadonly();

    getTodos() {
        this.http.get<Todo[]>(this.apiUrl).subscribe(data => {
            this.#todos.set(data);
        });
    }

    getTodo(id: number) {
        return this.http.get<Todo>(`${this.apiUrl}/${id}`);
    }

    addTodo(title: string) {
        this.http.post<Todo>(this.apiUrl, { title }).subscribe(newTodo => {
            this.#todos.update(prev => [...prev, newTodo]);
        });
    }

    deleteTodo(id: number) {
        this.http.delete(`${this.apiUrl}/${id}`).subscribe({
            next: () => {
                this.#todos.update(list => list.filter(t => t.id !== id));
            },
            error: (err) => console.error('Error while deleting: ', err)
        });
    }

    updateTodo(id: number, todo: Todo) {
        this.http.put<Todo>(`${this.apiUrl}/${id}`, todo).subscribe({
            next: (updatedTodo) => {
                this.#todos.update(list =>
                    list.map(t => t.id === id ? updatedTodo : t)
                );
            },
            error: (err) => console.error('Error while deleting: ', err)
        });
    }
}