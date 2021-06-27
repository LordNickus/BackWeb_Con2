const {Schema, Types} = require('mongoose')

module.exports = new Schema ({
    // _id: Types.ObjectId,
    
    userId: {
        type: ObjectId,
        ref: 'User',
    },
    name : {
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

