const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const productRoute = require('./api/route/productRoute');
const productReviewRoute = require('./api/route/productReviewRoute')
const db = require('./api/db/connection');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const path = require('path');
app.use(express.static(__dirname + '/shoppingkart/build/'));

app.get('/',function(req,res, next){
    res.sendFile(path.join(__dirname + '/shoppingkart/build/index.html'));
    next();
});


app.use('/product', productRoute);
app.use('/review', productReviewRoute);

app.listen(process.env.PORT || 5000, function () {
    console.log('Express serve running on port 5000');
});
