const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	user: { type: String },
	cart: { type: mongoose.Schema.Types.ObjectId, ref: 'cart' },
	price: { type: Number },
	city: { type: String },
	street: { type: String },
	dateOfOrder: { type: Date },
	dateOfPurchase: { type: Date, default: Date.now() },
	card: { type: String }
});

module.exports = mongoose.model('order', orderSchema);
