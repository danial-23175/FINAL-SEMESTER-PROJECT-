const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobPost' }]
});

module.exports = mongoose.model('User', userSchema);
