const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productReviewSchema = new Schema({
    userName : {
        type: String,
        required: true,
        unique: true
    },
    userReview : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('productReview', productReviewSchema);