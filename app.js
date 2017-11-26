var express = require('express');
var controller = require('./controllers/controller');

var app = express();

//set up templet engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./appfolder'));

//listen to port
app.listen(3000);
console.log('listening to aport 3000');

//fire controllers
controller(app);
