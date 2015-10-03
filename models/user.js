// Load required packages
var mongoose = require('mongoose');
var User = require('./user');
var Item = require('./beer');
// Define our beer schema
var userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String,  required: true},
  isAdmin: {type: Boolean,  default: false},
  inventory: {type: mongoose.Schema.ObjectId , ref: 'Item'}
});

// Export the Mongoose model
module.exports = mongoose.model("User", userSchema);
