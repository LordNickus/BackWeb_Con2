const Products = require("../schemas/Products");
// const router = require("./categories");
const router = require ('express').Router()


router.get('/', function (req,res){})

router.get('/:id', function(req, res){
    Products    
        .findById(req.params.id)
        .then(function(product){
            product.views_count = product.views_count+1

            product.save().then(product =>{
                res.send(product)
            })     
        })
        .catch(function(err){
            console.log(err)
            res.send({message : "error"})
        })

        let result = Product.find(query)

if(req.query.order){
    result.sort({[req.query.order] : req.query.dir === 'asc'? 1 : -1})
}

if(req.query.start){
    result.skip(Number(req.query.start))
}

 result.limit(10)
 
 result.then(results => {
     res.send(results)
 }).catch(err => {
     console.log(err)
     res.send({message : "error"})
 })
})



 router.get('/:id', function (req,res) {})

module.exports = router