var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// defining the parameters of the Article model. 
var ArticleSchema = new Schema({
	title: {
		type: String,
	},
	date: {
		type: Date,
	},
	url: {
		type: String,
	}
});

// Exporting the Article model for use in server.js
var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;