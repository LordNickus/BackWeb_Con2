const express = require('express')
const app = express()
const path = require ('path')
const bodyParser = require ('body-parser')
const nodemailer = require ('nodemailer')
const md5 = require ('md5')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', function(req,res){
    res.send('Bienvenido a backEnd')
})

app.get( '/register', function (req, res){
    let file = path.resolve('src','views','register.html')

    console.log(file)

    res.sendFile(file)
     
})

app.get('/confirm', function (req,res){
    res.send('Confirmado!')
})

app.post('/register', async function(req, res){
    let token = md5(req.body.email + Date.now())

    console.log(token)
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
        <a href="http://localhost:4000/confirm?token=${token}">
         Confirmar cuenta
         </a>
         
         `,
      });  

    console.log("Message sent: %s", info.messageId);
  
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
      



    
    res.send(req.body)
})

app.listen(4000)


