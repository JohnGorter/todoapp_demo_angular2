System.register(['angular2/platform/browser', './components/todoapp.component', './services/todo.service', 'angular2/router'], function(exports_1) {
    var browser_1, todoapp_component_1, todo_service_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (todoapp_component_1_1) {
                todoapp_component_1 = todoapp_component_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(todoapp_component_1.TodoApp, [todo_service_1.TodoService, router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map