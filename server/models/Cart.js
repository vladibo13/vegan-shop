const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
	{
		id: {
			type: Number,
			unique: true
		},
		userID: [ { type: Schema.Types.ObjectId, ref: 'user' } ]
	},
	{ timestamps: true }
);

module.exports = mongoose.model('cart', cartSchema);
