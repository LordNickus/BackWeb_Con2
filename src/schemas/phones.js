const mongoose = require('mongoose')
const {Schema, model} = require('mongoose')
const md5 = require ('md5')
const UserSchemas = require('../src/schemas/User')

let User = new Schema ({

    // _id: Types.ObjectId,
    userId: {
        type: Number,
        required : true
    },
    phoneNumber : {
        type : String,
        required : true
    },
    countryCode: {
        type: String,
        required : true
    },    
    areaCode: {
        type: String,
        required : true
    },
    
})




module.exports = model ('User', UserSchemas) 