const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true
		},
		name: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		id: {
			type: String,
			required: true,
			min: 5,
			max: 10
		},
		password: {
			type: String,
			required: true
		},
		city: {
			type: String,
			required: true
		},
		street: {
			type: String,
			required: true
		},
		role: {
			type: String,
			default: 'member',
			required: true
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('user', userSchema);
