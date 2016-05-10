import { Component, Inject } from 'angular2/core'
import { RouteParams, Router, RouterLink } from 'angular2/router'
import { TodoService } from '../services/todo.service'
import { Todo } from '../models/todo.model'

@Component({
    selector:'todo-detail',
    template:`
      <h4>{{todo.title}}</h4>
      <p>{{ todo.description }}</p>
      
      <br/>
      <a [routerLink]="['List']">Back to list</a>
    `,
    directives:[RouterLink]
})
export class TodoDetail{
    private todo:Todo;
    constructor(@Inject(TodoService) ts:TodoService, @Inject(RouteParams) routeparams:RouteParams){
        this.todo = ts.getTodoById(routeparams.params['id']);  
    }
    
}