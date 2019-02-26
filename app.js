var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public/dist/condo-mng'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString(), function(err) {
    if (err) {
        console.log('Mongoose error: ' + err);
    } else {
        console.log('Connection successful!\t' + mongoose.connection.host + ':' + mongoose.connection.port);
    }
});

setupController(app);
apiController(app);

app.listen(port);