const Brands = require("../schemas/Brands");
const router = require ('express').Router()


router.get('/', function (req,res){
    Brands    
        .find()
        .exec()
        .then(function(brands){
            res.send(brands)
        })
        .catch(function(){
            res.send({message: "error"})
    })
})

router.post('/', function (req, res){
    let brand = new Brands(req.body)

    brand
        .save()
        .then(function(brand){
            res.send({message : brand._id})
        })
        .catch(function(){
            res.send({message: "error"})
    })
})

router.patch('/:id', function (req, res){
     Brands
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function(){
            res.send({message: "updated"})
        })
        .catch(function(){
            res.send({message: "error"})
    })

})

router.delete('/:id', function (req, res){
    Brands
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function(){
            res.send({message: "deleted"})
        })
        .catch(function(){
            res.send({message: "error"})
    })

})
module.exports = router