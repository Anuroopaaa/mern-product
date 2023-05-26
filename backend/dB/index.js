const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://anuroopaks:Anuroopa@123@cluster0.bde5pwt.mongodb.net/product', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDb Atlas connection established')
    })
    .catch(err => {
        console.log(err)
    })