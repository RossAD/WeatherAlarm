var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
app.use('/directives', express.static(__dirname + '/directives'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect to mongo database named "shortly"
mongoose.connect('mongodb://localhost/wxalarm');

// configure our server with all the middleware and routing
// require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);
var port = 8080;
// start listening to requests on port 8000
app.listen(port);
console.log('Server now listening on port ' + port);
// export our app for testing and flexibility, required by index.js
module.exports = app;