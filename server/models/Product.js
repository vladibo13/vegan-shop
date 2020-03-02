const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
	{
		productId: {
			type: number,
			unique: true
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('product', productSchema);
