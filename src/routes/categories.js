const router = require ('express').Router()
const Category = require ('../schemas/Category')

// http://localhost:4000/categories
router.get('/', function (req, res){
    // enviar listado de todas las categorias
    Category
        .find()
        .exec()
        .then(function(categories){
            res.send(categories)
        })
        .catch(function(){
            res.send({message: "error"})
    })

})

// http://localhost:4000/categories/456
router.get('/:id', function (req, res){
    // enviar detalle de la categoria con el id de la url
    Category
        .findById(req.params.id)
        .then(function(category){
            res.send(category)
        })
        .catch(function(){
            res.send({message: "error"})
    })
})

// http://localhost:4000/categories
router.post('/', function (req, res){
    // enviar el id de la base de datos
    // crea categoria
    let category = new Category(req.body)

    category
        .save()
        .then(function(category){
            res.send({message : category._id})
        })
        .catch(function(){
            res.send({message: "error"})
    })
})

// http://localhost:4000/categories/123
router.patch('/:id', function (req, res){
    // enviar mensaje de confirmacion
    // modifica categoria
    Category
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function(){
            res.send({message: "updated"})
        })
        .catch(function(){
            res.send({message: "error"})
    })

})

// http://localhost:4000/categories/456
router.delete('/:id', function (req, res){
    // enviar mensaje de confirmacion
    // elimina categoria
    Category
        // .deleteOne({...})
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function(){
            res.send({message: "deleted"})
        })
        .catch(function(){
            res.send({message: "error"})
    })

})

module.exports = router