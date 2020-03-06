const mongoose = require('mongoose');

const cartInfo = new mongoose.Schema(
	{
		id: {
			type: Number,
			unique: true
		},
		productID: [ { type: Schema.Types.ObjectId, ref: 'product' } ],
		amount: {
			type: Number
		},
		price: {
			type: Number
		},
		cartID: {
			type: Schema.Types.ObjectId,
			ref: 'cart'
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('cartinfo', cartInfo);
