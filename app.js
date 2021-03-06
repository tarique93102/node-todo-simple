var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

// setting path for calling static files
app.use('/', express.static(__dirname + '/public'));

// setting the view engine by default
app.set('view engine', 'ejs');

// connects to mongo database
mongoose.connect(config.getDbConnectionString());

// check for database connection status
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log('Database connection established');
});

// calling the segregated api calls
setupController(app);
apiController(app);

app.listen(port);