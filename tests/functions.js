const mongoose = require('mongoose')
// const { getMaxListeners } = require('../src/schemas/User')
const User = require('../src/schemas/User')
// const User = mongoose.model('User', User)


module.exports = {
  findUsers(){
    // //metodo estatico o metodo de clase
    // User.find({email:"nicolasJ@gmail.com"}).then(users => {
    //   console.log(users)
    // }).catch(err => {
    //   console.log(err)
    // })
      // ef599ad18a7b13116eed9c86101e6c78
    // let user =new User ({email:"nicolasJ@gmail.com"})

    User.findByToken('ef599ad18a7b13116eed9c86101e6c78')
      .then(u => console.log(u))
      .catch(err => console.log(err))

  },

createUser(){
  // new = para una instancia
    let newUser = new User({email: "nicolasJ@gmail.com", password :"uehu73g"})
  // metodo de instancia
    newUser
      .save()
      .then(user =>{
          console.log('el id del usuario es'+ user._id)
      })
      .catch(err => {
          console.error(err)
    })
  }
}
  
