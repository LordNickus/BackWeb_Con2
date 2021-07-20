const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/itMaster_backend', {useNewUrlParser: true, useUnifiedTopology: true})
const authRouter = require('./src/routes/auth')
const categoriesRouter = require('./src/routes/categories')
const productsRouter = require('./src/routes/products')
const Product = require('./src/schemas/Products')
const Brand = require('./src/schemas/Brands')
const brandsRouter = require('./src/routes/brands')
const cors = require('cors')

app.use(cors()) //valida las peticiones!! poner primero
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/auth', authRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/products', productsRouter)
app.use('/api/brands', brandsRouter)


app.get('/', function(req,res){
    res.send('Bienvenido a backEnd')
})

app.get('/products', function (req, res){
// listado de productos
})

app.get('/products/create', function (req, res){
// mostrar formulario de alta de productos
    res.sendFile(__dirname + '/src/views/products-create.html')
})

app.post('/products', function (req, res){
 //   recibir datos del formulario
    let schema = new Product ({
        ...req.body,
        seller_id: 12345
    })
    schema.save().then(()=>{
        res.status(201).send ({message: 'created'})
    }).catch(err => {
        console.log(err)
        res.status(422).send({message: err})
//422 informacion invalida
    })
 //   guardar en la base de datos
 //   enviar una respuesta
})


app.listen(4000)
// http://localhost:4000

