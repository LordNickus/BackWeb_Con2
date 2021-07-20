const {Schema, Types} = require('mongoose')
const User = require('./User')


module.exports = new Schema ({
    // _id: Types.ObjectId,
    url : {
        type : String,
        required : true
    },
    
    },

)

