const mongoose = require('mongoose');

const locations = mongoose.Schema({
    city: { type: String, required: true }
});

module.exports = mongoose.model("locations", locations);