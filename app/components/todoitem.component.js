System.register(['angular2/core', '../pipes/todopipe.pipe', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, todopipe_pipe_1, router_1;
    var TodoItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todopipe_pipe_1_1) {
                todopipe_pipe_1 = todopipe_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TodoItem = (function () {
                function TodoItem() {
                    this.onDelete = new core_1.EventEmitter();
                }
                TodoItem.prototype.deleteTodo = function () {
                    this.onDelete.emit('');
                };
                __decorate([
                    core_1.Input()
                ], TodoItem.prototype, "item", void 0);
                __decorate([
                    core_1.Output()
                ], TodoItem.prototype, "onDelete", void 0);
                TodoItem = __decorate([
                    core_1.Component({
                        selector: 'todo-item',
                        pipes: [todopipe_pipe_1.TodoPipe],
                        template: "<span\n         [routerLink]=\"['Details', {id:item.id}]\" \n         [innerHTML]=\"item | todopipe\"></span><span (click)=\"deleteTodo()\"> [Done]</span><br/>",
                        directives: [router_1.RouterLink]
                    })
                ], TodoItem);
                return TodoItem;
            })();
            exports_1("TodoItem", TodoItem);
        }
    }
});
//# sourceMappingURL=todoitem.component.js.map