const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    fullname: { type: String, required: false, max: 50, min: 5 },
    password: { type: String, required: true, max: 20, min: 5 },
    email: { type: String, required: false, unique: true, max: 100, min: 5 },

});



userSchema.methods.toJSON = () => {
    return {
        _id: userSchema._id,
        fullname: userSchema.fullname,
        password: userSchema.password,
        email: userSchema.email
    };
};

module.exports = mongoose.model("users", userSchema);
