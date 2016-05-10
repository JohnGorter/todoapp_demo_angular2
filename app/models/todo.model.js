System.register([], function(exports_1) {
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(id, title, description) {
                    this.id = id;
                    this.title = title;
                    this.description = description;
                }
                return Todo;
            })();
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=todo.model.js.map