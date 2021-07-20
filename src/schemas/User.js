const {Schema, model} = require('mongoose')
const md5 = require ('md5')


let User = new Schema({
    email: {
        type: String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    registrationDate: {
        type: Date,
        default : Date.now
    },
    confirmationDate: Date,
    confirmationToken: {
        type: String,
        required : true,
        default : function (){
            return md5(Date.now())
        }
    },

})

User.statics.findByToken = function (token){
    return this.findOne ({confirmationToken: token})
}
// la diferencia es que este se usa:
// User.findByToken()


User.methods.findByEmail = function(cb){ // cb=callback 
    return model('User').find({email : this.email }, cb)
}
// y este se usa:
// let user = new User ({email:"..."}) 
// user.findByEmail()

module.exports = model ('User', User) 