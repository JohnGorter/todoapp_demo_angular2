System.register(['angular2/core', 'angular2/router', '../services/todo.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, todo_service_1;
    var TodoDetail;
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
            }],
        execute: function() {
            TodoDetail = (function () {
                function TodoDetail(ts, routeparams) {
                    this.todo = ts.getTodoById(routeparams.params['id']);
                }
                TodoDetail = __decorate([
                    core_1.Component({
                        selector: 'todo-detail',
                        template: "\n      <h4>{{todo.title}}</h4>\n      <p>{{ todo.description }}</p>\n      \n      <br/>\n      <a [routerLink]=\"['List']\">Back to list</a>\n    ",
                        directives: [router_1.RouterLink]
                    }),
                    __param(0, core_1.Inject(todo_service_1.TodoService)),
                    __param(1, core_1.Inject(router_1.RouteParams))
                ], TodoDetail);
                return TodoDetail;
            })();
            exports_1("TodoDetail", TodoDetail);
        }
    }
});
//# sourceMappingURL=tododetails.component.js.map