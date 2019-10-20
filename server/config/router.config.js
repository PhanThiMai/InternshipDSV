var users = require('../routes/api/user.api')
var products = require("../routes/api/product.api");
var categories = require('../routes/api/category.api');


module.exports = app => {
    app.use('/user', users)
    app.use('/product', products);
    app.use('/category', categories);

    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });


    app.use((err, req, res) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
                error: {},
            },
        });
    });

};
