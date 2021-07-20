const mongoose = require('mongoose')
const {Schema, model} = require('mongoose')
const md5 = require ('md5')
const UserSchemas = require('../src/schemas/User')

let Address = new Schema ({

    // _id: Types.ObjectId,
    userId: {
        type: Number,
        required : true
    },
    street : {
        type: Number,
        required : true
    },
    country: {
        type: Number,
        required : true
    },    
    city: {
        type: Number,
        required : true
    },
    zipcode: {
        type: Number,
        required : true
    },

})




module.exports = model ('Address', UserSchemas) 