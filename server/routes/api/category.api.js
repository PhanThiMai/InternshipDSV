const mongoose = require('mongoose');
const router = require('express').Router();
const categories = require('../../models/category.model')


router.get('/', (req, res, next) => {
    return categories.find()
        .then((categories) => res.json({
            type: 1,
            data: categories
        }))
        .catch(next);
})


module.exports = router
