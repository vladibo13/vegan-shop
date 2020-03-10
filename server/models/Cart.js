const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
	{
		userID: { type: Schema.Types.ObjectId, ref: 'user' }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('cart', cartSchema);
