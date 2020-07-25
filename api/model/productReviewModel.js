const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productReviewSchema = new Schema({
    productRating : {
        type: Number,
        required: true
    },
    productDescription : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('productReview', productReviewSchema);