
var mongoose = require('mangoose');

//connect to the dateabase
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds123136.mlab.com:23136/todolist');

//create a schema - blueprint
module.exports = function(app){

app.get('/todo', function(req, res){
  res.render('todo');
});

app.post('/todo', function(req, res){

});
 app.delete('/todo', function(req, res){

 });
};
