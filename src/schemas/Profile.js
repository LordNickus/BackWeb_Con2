const {Schema, Types} = require('mongoose')
const User = require('./User')

export default new Schema ({
    // _id: Types.ObjectId,
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    firstName : {
        type : String,
        required : true
    },
    lastName: {
        type: String,
        required : true
    },
    birtDate: {
        type: Date,
        required : true
    },
    },

)

