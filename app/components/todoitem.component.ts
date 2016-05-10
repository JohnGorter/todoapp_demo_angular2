import { Input, Output, Component, EventEmitter } from 'angular2/core'
import { Todo } from '../models/todo.model'
import { TodoPipe } from '../pipes/todopipe.pipe'
import {RouterLink} from 'angular2/router'


@Component({
    selector:'todo-item',
    pipes:[TodoPipe],
    template:`<span
         [routerLink]="['Details', {id:item.id}]" 
         [innerHTML]="item | todopipe"></span><span (click)="deleteTodo()"> [Done]</span><br/>`,
     directives:[RouterLink]
})
export class TodoItem{
    @Input() item:Todo;
    @Output() onDelete:EventEmitter<string> = new EventEmitter<string>(); 
    constructor(){  
    }
    
    deleteTodo(){
        this.onDelete.emit(''); 
    }
}
