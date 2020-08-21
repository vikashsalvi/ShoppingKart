/**

 @author    Deep Muni => B00828375

 **/

const mongoose = require('mongoose');


const url = "WRITE_MONGO_URL"

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connection Successful");
}).catch(err =>{
    console.log("MongoDB connection unsuccessful " + err);
})
