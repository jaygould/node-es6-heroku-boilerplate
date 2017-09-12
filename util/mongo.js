var mongoose = require('mongoose');

var db;
module.exports = {
	connectToServer: function(callback) {
		var mongoDB = process.env.MLAB_CONNECTION;
		mongoose.Promise = global.Promise;
		mongoose.connect(mongoDB);
		db = mongoose.connection;
		db.on('error', console.error.bind(console, 'MongoDB connection error:'));
		return callback();
	},
	getDb: function() {
		return db;
	}
};
