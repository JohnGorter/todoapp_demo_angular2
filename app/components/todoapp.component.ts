import { Component } from 'angular2/core'
import { RouteConfig, RouterOutlet, RouterLink, ROUTER_PROVIDERS } from 'angular2/router'
import { TodoList } from './todolist.component'
import { TodoCreate } from './todocreate.component'
import { TodoDetail } from './tododetails.component'

@Component({
    selector:'my-app',
    template:`
      <h1>Todo Application <br/><small>a simple todo application</small></h1>
      <p>Hieronder de todos voor vandaag, werk ze allemaal af voordat je naar bed mag</p>
      <router-outlet></router-outlet>
    `,
    directives:[RouterOutlet]
    
})
@RouteConfig([
    {path:'/', component:TodoList, as:'List'},
    {path:'/create', component:TodoCreate, as:'Create'},
    {path:'/details/:id', component:TodoDetail, as:'Details'},
])
export class TodoApp {}