const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anuroopaks:Anuroopa123@cluster0.bde5pwt.mongodb.net/product')
 .then(() => {
    console.log('Connected to MongoDB Atlas');
 })
 .catch(err => {
    console.log("err"+err);
 })