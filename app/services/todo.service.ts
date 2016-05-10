import { Todo} from '../models/todo.model'
import { Injectable } from 'angular2/core'

@Injectable()
export class TodoService{
    private static counter:number = 0; 
    private todos:Todo[] = []; 
    
    constructor(){
        this.addTodo(new Todo (0, 'hond uitlaten', 'wel alles laten doen, zoals poepen...'));
        this.addTodo(new Todo (0, 'hond uitlaten2', 'wel alles laten doen, zoals poepen...'));
        this.addTodo(new Todo (0, 'hond uitlaten3', 'wel alles laten doen, zoals poepen...'));
    }
    
    getAll():Todo[]{
        return this.todos;
    }
    public getTodoById(id:number|string):Todo{
        return this.todos.find(t => t.id == id);
    }
    
    public addTodo(todo:Todo){
        todo.id = TodoService.counter++;
        this.todos.push(todo); 
    }
    
    public deleteTodo(todo:Todo){
        this.todos.splice(this.todos.indexOf(todo), 1);
    }
}  