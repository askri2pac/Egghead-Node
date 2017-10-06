module.exports = function(app){

    let todolist = require('../controllers/todoListController')

    // todolist routes

    app.route('/tasks')
    .get(todolist.listAllTasks)
    .post(todolist.createTeask)
    
    app.route('/tasks/:tasksid')
    .get(todolist.readTask)
    .put(todolist.puttask)
    .delete(todolist.deletetask)
}