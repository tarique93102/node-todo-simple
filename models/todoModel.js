var mongoose = require('mongoose');

// requiring the schema from mongoose
var Schema = mongoose.Schema;

// defining the general schema
var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;