const mongoose = require('mongoose');
const router = require('express').Router();
const products = require('../../models/product.model')


router.get('/', (req, res, next) => {
    return products.find()
        .then((products) => res.json({
            type: 1,
            data: products
        }))
        .catch(next);
})


module.exports = router
