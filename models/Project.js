const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Project = new Schema({
	name: {
		type: String
	},
	owner: {
		type: String
	},
	ownerID: {
		type: String
	},
	status: {
		type: String
	},
	description: {
		type: String
	},
	tags: {
		type: Array
	},
	file: {
		type: String
	}
}, {
	collection: 'projects'
});

Project.index({ name: "text", description: "text", status: "text"},
	{ weights: { name: 5, description: 3, status: 1} })

Project.statics = {
	searchPartial: function (q, callback) {
		return this.find({
			$or: [
				{ "name": new RegExp(q, "gi") },
				{ "description": new RegExp(q, "gi") },
				{ "status": new RegExp(q, "gi") },
			]
		}, callback);
	},

	searchFull: function (q, callback) {
		return this.find({
			$text: { $search: q, $caseSensitive: false }
		}, callback)
	},

	search: function (q, callback) {
		this.searchFull(q, (err, data) => {
			if (err) return callback(err, data);
			if (!err && data.length) return callback(err, data);
			if (!err && data.length === 0) return this.searchPartial(q, callback);
		});
	},
}
module.exports = mongoose.models.Post || mongoose.model('Project', Project);
