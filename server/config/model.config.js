var mongoose = require("mongoose");
var Grid = require("gridfs-stream");
require("dotenv").config();


mongoose.Promise = global.Promise;

const connStr = `mongodb+srv://${process.env.DB_USER}:${
    process.env.DB_PASS
    }@${process.env.DB_URL}/${process.env.DB_NAME}`;

module.exports.init = () => {

    mongoose.connect(connStr, err => {
        if (err) fail(err);
        else console.log("Connected database!");

    });


};

