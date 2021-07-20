const {Schema, Types, model} = require('mongoose')
const User = require('./User')

 let Brand= new Schema ({
    // _id: Types.ObjectId,
    
    userId: {
        type: Number,
        ref: 'User',
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
       
    },

)

module.exports = model('Brand', Brand)
