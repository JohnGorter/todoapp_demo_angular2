import { Component, Inject } from 'angular2/core'
import { RouterLink } from 'angular2/router'
import { TodoService } from '../services/todo.service'
import { Todo } from '../models/todo.model'
import { TodoItem } from './todoitem.component'

@Component({
    selector:'todo-list',
    template:`
      <h2>todo list</h2>
        <todo-item *ngFor="#todo of ts.getAll()" [item]="todo" (onDelete)="deleteTodo(todo)"></todo-item>
      <br/><br/>
      <a [routerLink]="['Create']">Create a new todo</a>
    `,
    directives:[RouterLink, TodoItem]
})
export class TodoList{
  private ts:TodoService;
  constructor(@Inject(TodoService) todoservice:TodoService){
    this.ts = todoservice;
  } 
  deleteTodo(todo:Todo){
    this.ts.deleteTodo(todo); 
  }
}