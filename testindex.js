var express = require('express');
var session = require('express-session');
var path = require('path');
var db = require('./models');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'dist')))

db.sequelize.sync().then(function() {
  http.createServer(app).listen(app.get('port'), function() {
    console.log('express listening on ', app.get('port'));
  });
});
