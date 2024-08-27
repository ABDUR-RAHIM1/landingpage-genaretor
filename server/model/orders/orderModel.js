const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    businessName: { type: String, required: true },
    pageUrl: { type: String, required: true },
    productName: { type: String, required: true },
    totalPrice: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    emargency: { type: String },
    email: { type: String, required: true },
    quantity: { type: String, required: true },
    company: { type: String },
    opinion: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    zip: { type: String },
    message: { type: String },
}, { timestamps: true });


module.exports = orderSchema
