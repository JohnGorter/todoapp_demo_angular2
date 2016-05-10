import { Component, Inject } from 'angular2/core'
import { TodoService } from '../services/todo.service'
import { Todo } from '../models/todo.model'
import { Router } from 'angular2/router'

@Component({
    selector:'todo-create',
    template:`
    <h4>Create a new todo</h4>
    <form #f="ngForm" onsubmit="return false;">
        <dl>
          <dt>Title</dt>
          <dd><input type="text" ngControl="title" required/></dd>
          <dt>Description</dt>
          <dd><input type="text" ngControl="description" required/></dd>
        </dl>
        <button (click)="saveTodo(f.value)">Save</button>
    </form>
    `
})
export class TodoCreate {
    constructor(@Inject(TodoService) private ts:TodoService,  @Inject(Router) private router:Router){}
   
    public saveTodo(todo){
        this.ts.addTodo(todo); 
        this.router.navigate(['List'])
    }
    
}