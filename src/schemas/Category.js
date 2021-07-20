const {Schema, Types, model} = require('mongoose')

const Category = new Schema ({
    name : {
        type : String,
        required : true,
        unique : true
    }
})

module.exports = model('Çategory', Category)