const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
const express = require("express");
const path = require("path");

const mongoose = require("mongoose");

module.exports = app => {
    const isProduction = process.env.NODE_ENV === 'production';



    app.use(cors());
    app.use(require('morgan')('dev'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

    if (!isProduction) {
        app.use(errorHandler());
    }



};
