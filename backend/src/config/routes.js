module.exports = app => {
    app.route('/todo')
    .get(app.src.api.TodoService.get)
    .post(app.src.api.TodoService.post)
    
    app.route('/todo/:id')
    .put(app.src.api.TodoService.put)
    .get(app.src.api.TodoService.getSearch)
    .delete(app.src.api.TodoService.del)
   
    console.log()
}