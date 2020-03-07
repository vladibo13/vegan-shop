const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({}).populate('categoryID');
		res.status(200).json(products);
	} catch (e) {
		return res.status(401).end();
	}
};
