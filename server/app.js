const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
const mongoose = require('mongoose');
var Grid = require("gridfs-stream");


mongoose.promise = global.Promise;

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if (!isProduction) {
    app.use(errorHandler());
}

const connStr = "mongodb+srv://Mai:mai101205@cluster0-rmxxx.mongodb.net/test"
mongoose.connect(connStr, err => {
    if (err) fail(err);
    else console.log("Connected database!");

});


var Users = require('./routes/api/user.api')
app.use('/user', Users)

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

const server = app.listen(4000, () => console.log('Server started on http://localhost:4000'));