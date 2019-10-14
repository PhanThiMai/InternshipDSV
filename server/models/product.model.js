const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: { type: String, required: true, max: 60, min: 2 },
    category: [{ type: String, required: true, max: 10, min: 1 }],
    brandch: { type: String, required: true, max: 60, min: 2 },
    price: { type: Number, required: true, min: 0 },
    size: [{ type: String, require: true }],
    color: [{ type: String, require: true }],
    image: [{ type: String, require: true }],
    quantity: { type: Number, require: true, min: 0 },
    description: { type: String, require: false }
});



module.exports = mongoose.model("product", productSchema);
