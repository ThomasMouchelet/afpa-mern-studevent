const mongoose = require('mongoose');
const Shcema = mongoose.Schema;

const eventSchema = new Shcema({
    name: {
        type: String,
        required: true,
    },
    dateStarted: {
        type: Date,
    }
})

module.exports = mongoose.model('Event', eventSchema);