const {Schema, Types, model} = require('mongoose')
const User = require('./User')

 let newProduct= new Schema ({
    // _id: Types.ObjectId,
    
    userId: {
        type: Number,
        ref: 'User',
    },
    name : {
        type : String,
        required : true
    },
    price: {
        type: Number,
        // required : true
    },
    stock: {
        type: Number,
        required : true
    },
    category: {
        type: String,
        required : true
    },
    brand: {
        type: String,
        required : true
    },
    model: {
        type: String,
        required : true
    },
    version: {
        type: String,
        required : true
    },
    year: {
        type: Number,
        required : true
    },
    // views_count: {
    //     type: Number,
    //     required : true
    // },
    // likes_count: {
    //     type: Number,
    //     required : true
    // },
    },

)

module.exports = model('Product', newProduct)
