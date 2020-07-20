const mongoose = require('mongoose');

const url = "mongodb+srv://deepmuni:MPrfJkmBJDOYvXQK@testing-deep-aets3.mongodb.net/CSCI_5709_Project?retryWrites=true&w=majority";

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connection Successful");
}).catch(err =>{
    console.log("MongoDB connection unsuccessful " + err);
})
