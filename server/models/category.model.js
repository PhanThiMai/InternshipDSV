const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: { type: String, required: true },
    root: { type: Boolean, required: false },
    leaf: { type: Boolean, required: false }

});

module.exports = mongoose.model("category", categorySchema);
