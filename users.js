const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lklkl');
const userSchema = mongoose.Schema({
  name: String,
  username: String
});

module.exports = mongoose.model('user',userSchema);