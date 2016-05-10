import { Pipe, PipeTransform } from 'angular2/core'
import { Todo } from '../models/todo.model'

@Pipe({
    name:'todopipe'
})
export class TodoPipe implements PipeTransform {
    public transform (value:Todo){
        return '<strong>' + value.title+ '</strong>';
    }
}
