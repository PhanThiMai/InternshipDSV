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
            const productInfo = body.product;
            let product = new products({
                category: productInfo.category,
                brand: productInfo.brand,
                size: productInfo.size,
                color: productInfo.color,
                name: productInfo.name,
                price: productInfo.price,
                amount: productInfo.amount,
                description: productInfo.description,
                rating: productInfo.rating,
                image: productInfo.image
            })
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

router.post('/edit', (req, res, next) => {
    const { body } = req;
    console.log(body.product)

    products.findByIdAndUpdate(body.product._id, { $set: { amount: body.product.amount } }, err => {
        if (err) {
            res.json({
                type: 0
            })
        }
        res.json({
            type: 1
        })
    })

})


module.exports = router
