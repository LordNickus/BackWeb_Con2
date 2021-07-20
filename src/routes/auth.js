const router = require('express').Router()
const path = require('path')
const User = require('../schemas/User')
const nodemailer = require('nodemailer')


router.get( '/register', function (req, res){
    let file = path.resolve('src','views','register.html')

    console.log(file)

    res.sendFile(file)
     
})

router.get('/confirm', function (req, res){
    User.findByToken (req.query.token)
    .then(function (result){
        if (result) {
        return res.send('Confirmado!')}
    })
    .catch(function(err){
        console.log(err.message)
        res.send('Error!')
})
})

router.post('/register', async function(req, res){
    let user = new User (req.body)
    
    user.save().then(async u => {
                           
            // let token = md5(req.body.email + Date.now())

            // console.log(token)

            let testAccount = await nodemailer.createTestAccount();

            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: testAccount.user, // generated ethereal user
                    pass: testAccount.pass, // generated ethereal password
                },
                tls: {
                    rejectUnauthorized: false,
                }
            });

            let info = await transporter.sendMail({
                from: '"BackEnders 👻" <foo@example.com>', // sender address
                to: "bar@example.com, baz@example.com", // list of receivers
                subject: "Hello ✔ FWorld", // Subject line
                text: "Hello F world?", // plain text body
                html: `
                <b>Hello F world?</b>
                <a href="http://localhost:4000/confirm?token=${u.confirmationToken}">
                    Confirmar cuenta
                </a>
                
                `,
            });  

            console.log("Message sent: %s", info.messageId);
            // console.log("Preview URL: %s", );
            
            res.send(nodemailer.getTestMessageUrl(info))

            console.log (u)
        }).catch(err =>{
            console.log (err)
        })      
      
   
    
})

module.exports = router