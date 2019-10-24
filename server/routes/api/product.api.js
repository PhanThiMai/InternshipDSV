const router = require('express').Router();
const products = require('../../models/product.model')
var atob = require('atob');

router.get('/', (req, res, next) => {
    return products.find()
        .then((products) => res.json({
            type: 1,
            data: products
        }))
        .catch(next);
})

router.post('/', (req, res, next) => {
    const { body } = req;
    let token = body.token;
    if (token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        let decode = JSON.parse(jsonPayload);
        if (decode.role !== 'admin') {
            res.json({
                type: 0,
                msg: 'You are not admin'
            })
        } else {
            let product = new products({
                category: body.category,
                brand: body.brand,
                size: body.size,
                color: body.color,
                name: body.name,
                price: body.price,
                amount: body.amount,
                description: body.description,
                rating: body.rating,
                image: body.image
            })
            console.log("product : api ", product)
            return product.save().then(() =>
                res.json({
                    type: 1,
                    msg: "add product successful"
                }))
                .catch(err =>
                    res.json({
                        type: 0,
                        err
                    })
                )
        }
    }
    else {
        res.json({
            type: 0,
            msg: 'some thing wrong!'
        })
    }

})


module.exports = router
