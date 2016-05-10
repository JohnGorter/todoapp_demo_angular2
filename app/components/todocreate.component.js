System.register(['angular2/core', '../services/todo.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, todo_service_1, router_1;
    var TodoCreate;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TodoCreate = (function () {
                function TodoCreate(ts, router) {
                    this.ts = ts;
                    this.router = router;
                }
                TodoCreate.prototype.saveTodo = function (todo) {
                    this.ts.addTodo(todo);
                    this.router.navigate(['List']);
                };
                TodoCreate = __decorate([
                    core_1.Component({
                        selector: 'todo-create',
                        template: "\n    <h4>Create a new todo</h4>\n    <form #f=\"ngForm\" onsubmit=\"return false;\">\n        <dl>\n          <dt>Title</dt>\n          <dd><input type=\"text\" ngControl=\"title\" required/></dd>\n          <dt>Description</dt>\n          <dd><input type=\"text\" ngControl=\"description\" required/></dd>\n        </dl>\n        <button (click)=\"saveTodo(f.value)\">Save</button>\n    </form>\n    "
                    }),
                    __param(0, core_1.Inject(todo_service_1.TodoService)),
                    __param(1, core_1.Inject(router_1.Router))
                ], TodoCreate);
                return TodoCreate;
            })();
            exports_1("TodoCreate", TodoCreate);
        }
    }
});
//# sourceMappingURL=todocreate.component.js.map