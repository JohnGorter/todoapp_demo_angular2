System.register(['angular2/core', 'angular2/router', '../services/todo.service', './todoitem.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, todo_service_1, todoitem_component_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todoitem_component_1_1) {
                todoitem_component_1 = todoitem_component_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList(todoservice) {
                    this.ts = todoservice;
                }
                TodoList.prototype.deleteTodo = function (todo) {
                    this.ts.deleteTodo(todo);
                };
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        template: "\n      <h2>todo list</h2>\n        <todo-item *ngFor=\"#todo of ts.getAll()\" [item]=\"todo\" (onDelete)=\"deleteTodo(todo)\"></todo-item>\n      <br/><br/>\n      <a [routerLink]=\"['Create']\">Create a new todo</a>\n    ",
                        directives: [router_1.RouterLink, todoitem_component_1.TodoItem]
                    }),
                    __param(0, core_1.Inject(todo_service_1.TodoService))
                ], TodoList);
                return TodoList;
            })();
            exports_1("TodoList", TodoList);
        }
    }
});
//# sourceMappingURL=todolist.component.js.map