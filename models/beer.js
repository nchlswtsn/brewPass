// Load required packages
var mongoose = require('mongoose');
var User = require('./user');
// Define our beer schema
var BeerSchema = new mongoose.Schema({
  owner: String,
  beerName: String,
  value: Number,
  picture: String,
  isAvailable: Boolean
  // swapOffer: [];
});

// Export the Mongoose model
module.exports = mongoose.model('Beer', BeerSchema);
