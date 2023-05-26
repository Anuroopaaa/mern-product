const mongoose = require('mongoose')
const Schema = mongoose.Schema

const product = new Schema({
    title:String,
    price:String,
    detail:String,
    image:String
})

const PRODUCT = mongoose.model('Product', product)

module.exports = PRODUCT