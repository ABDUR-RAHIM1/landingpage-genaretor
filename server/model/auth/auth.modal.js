const { mongoose } = require("mongoose");
const pageSchema = require("../page/pageModel");
const orderSchema = require("../orders/orderModel");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        set: v => v.replace(/\s+/g, '')
    },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pages: [pageSchema],
    orders: [orderSchema]
});

const userModal = mongoose.model('People', userSchema);

module.exports = userModal;