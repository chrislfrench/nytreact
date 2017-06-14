var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Article = require('./models/Article.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// link for local use
var link = 'mongodb://localhost/nytreact';

mongoose.connect(link);
var db = mongoose.connection;

db.on('error', function (err) {
	console.log('Mongoose error: ', err);
});

db.once('open', function() {
	console.log("Mongoose db connection successful.");
});


// --------- routing for app -----------

// when url "/", Express will return index.html 
app.get('/', function(req, res) {
	res.sendFile('./public/index.html');
});

// routing for get function that returns all saved articles.
app.get('api/saved', function(req, res) {

	Article.find({})
		.exec(function (err, doc) {

			if(err){
				console.log(err ': this is a find({}) error.');
			} else {
				res.send(doc);
			}
		})
});

// routing for post function that creates and posts new saved Article. Grabs the title, date, and url. 
app.post('/api/saved', function(req, res){
	var newArticle = new Article(req.body);

	var title = req.body.title;
	var date = req.body.date;
	var url = req.body.url;

	newArticle.save(function (err, doc){
		if(err){
			console.log(err ': this is a post error');
		} else {
			res.send(doc._id);
		}
	});
});

// routing for delete function that removes a saved Article. 
app.delete('/api/saved/', function (req, res){
	var url = req.param('url');

	Article.find({"url": url}).remove().exec(function(err, data){
		if(err){
			console.log(err ': this is a delete error');
		} else {
			res.send('Deleted');
		}
	});
});

app.listen(PORT, function() {
	conosle.log("App listening on PORT: " + PORT);
});



