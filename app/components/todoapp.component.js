System.register(['angular2/core', 'angular2/router', './todolist.component', './todocreate.component', './tododetails.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, router_1, todolist_component_1, todocreate_component_1, tododetails_component_1;
    var TodoApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (todolist_component_1_1) {
                todolist_component_1 = todolist_component_1_1;
            },
            function (todocreate_component_1_1) {
                todocreate_component_1 = todocreate_component_1_1;
            },
            function (tododetails_component_1_1) {
                tododetails_component_1 = tododetails_component_1_1;
            }],
        execute: function() {
            TodoApp = (function () {
                function TodoApp() {
                }
                TodoApp = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <h1>Todo Application <br/><small>a simple todo application</small></h1>\n      <p>Hieronder de todos voor vandaag, werk ze allemaal af voordat je naar bed mag</p>\n      <router-outlet></router-outlet>\n    ",
                        directives: [router_1.RouterOutlet]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: todolist_component_1.TodoList, as: 'List' },
                        { path: '/create', component: todocreate_component_1.TodoCreate, as: 'Create' },
                        { path: '/details/:id', component: tododetails_component_1.TodoDetail, as: 'Details' },
                    ])
                ], TodoApp);
                return TodoApp;
            })();
            exports_1("TodoApp", TodoApp);
        }
    }
});
//# sourceMappingURL=todoapp.component.js.map