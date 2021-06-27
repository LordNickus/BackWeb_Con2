const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/itMaster_backend', {useNewUrlParser: true, useUnifiedTopology: true});
const UserSchemas = require('../src/schemas/User');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('estamos conectados!')
});

const User = mongoose.model('user', UserSchemas)


let newUser = new User({email: "nicolasJ@gmail.com", password :"uehu73g"})

newUser.save()
.then(user =>{
    console.log('el id del usuario es'+ user._id)
})
.catch(err => {
    console.error(err)
})