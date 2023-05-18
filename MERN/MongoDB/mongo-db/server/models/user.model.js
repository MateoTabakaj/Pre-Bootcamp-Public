const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
});
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;
