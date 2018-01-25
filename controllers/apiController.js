// api controller that contains all the main apis for basic todo operations
var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // fetching the todos for a particular user
    app.get('/api/todos/:uname', function (req, res) {
        Todos.find({ username: req.params.uname }, function (err, todos) {
            if (err) throw err;

            res.send(todos);
        });
    });

    // fetching a particular todo based on id
    app.get('/api/todo/:id', function (req, res) {
        Todos.findById({ _id: req.params.id }, function (err, todo) {
            if (err) throw err;

            res.send(todo);
        });
    });

    // creating a new todo
    app.post('/api/todo', function (req, res) {
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function (err, todo) {
                if (err) throw err;

                res.send('Success');
            });
        } else {
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            newTodo.save(function (err) {
                if (err) throw err;
                
                res.send('Success'); 
            });
        }
    });

    // deleting a particular todo
    app.delete('/api/todo', function(req, res) {
        Todos.findByIdAndRemove(req.body.id, function(err) {
            if(err) throw err;

            res.send('Success');
        });
    });

}