const mongoose = require('mongoose');

const googleSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  picture: { type: String }
});

const User = mongoose.model('google', googleSchema);

module.exports = User;
