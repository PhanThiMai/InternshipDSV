const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: { type: String, required: true, max: 60, min: 2 },
    category: [{ type: String, required: true, max: 10 }],
    branch: { type: String, required: true, max: 60, min: 2 },
    price: { type: Number, required: true, min: 0 },
    size: [{ type: String, require: true }],
    color: [{ type: String, require: true }],
    image: [{ type: String, require: true }],
    amount: { type: Number, require: true, min: 0 },
    description: { type: String, require: false },
    rating: { type: Number, required: false },

});



module.exports = mongoose.model("products", productSchema);
