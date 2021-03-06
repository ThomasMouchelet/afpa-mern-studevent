const mongoose = require('mongoose');
const Shcema = mongoose.Schema;

const userSchema = new Shcema({
    lastName: {
        type: String,
    },
    firstName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema);