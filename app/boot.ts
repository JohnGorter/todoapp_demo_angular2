import { bootstrap } from 'angular2/platform/browser'
import { TodoApp } from './components/todoapp.component'
import { TodoService } from './services/todo.service'
import { ROUTER_PROVIDERS } from 'angular2/router'

bootstrap(TodoApp, [TodoService, ROUTER_PROVIDERS]);