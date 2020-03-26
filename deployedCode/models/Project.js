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
  status: {
    type: String
  },
  description: {
    type: String
  },
  file: {
    type: String
  }
},{
    collection: 'projects'
});

module.exports = mongoose.model('Project', Project);
