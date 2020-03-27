const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
	const { user, cart, price, city, street, dateOfOrder, card } = req.body;
	try {
		const newOrder = await Order.create({
			user,
			cart,
			price,
			city,
			street,
			dateOfOrder,
			card
		});
		res.status(200).json(newOrder);
	} catch (e) {
		res.status(401).json(e);
	}
};
