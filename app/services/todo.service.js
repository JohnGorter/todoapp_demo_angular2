System.register(['../models/todo.model', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var todo_model_1, core_1;
    var TodoService;
    return {
        setters:[
            function (todo_model_1_1) {
                todo_model_1 = todo_model_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoService = (function () {
                function TodoService() {
                    this.todos = [];
                    this.addTodo(new todo_model_1.Todo(0, 'hond uitlaten', 'wel alles laten doen, zoals poepen...'));
                    this.addTodo(new todo_model_1.Todo(0, 'hond uitlaten2', 'wel alles laten doen, zoals poepen...'));
                    this.addTodo(new todo_model_1.Todo(0, 'hond uitlaten3', 'wel alles laten doen, zoals poepen...'));
                }
                TodoService.prototype.getAll = function () {
                    return this.todos;
                };
                TodoService.prototype.getTodoById = function (id) {
                    return this.todos.find(function (t) { return t.id == id; });
                };
                TodoService.prototype.addTodo = function (todo) {
                    todo.id = TodoService.counter++;
                    this.todos.push(todo);
                };
                TodoService.prototype.deleteTodo = function (todo) {
                    this.todos.splice(this.todos.indexOf(todo), 1);
                };
                TodoService.counter = 0;
                TodoService = __decorate([
                    core_1.Injectable()
                ], TodoService);
                return TodoService;
            })();
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=todo.service.js.map