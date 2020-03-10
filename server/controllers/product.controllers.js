const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({}).populate('categoryID');
		console.log('search server call = ', products);
		res.status(200).json(products);
	} catch (e) {
		return res.status(401).end();
	}
};

exports.searchProductByCategory = async (req, res) => {
	try {
		const searchQuery = req.query.search;
		console.log('searchQuery = ', searchQuery);
		console.log('search server call = ', searchQuery);
		const products = await Product.find({}).populate('categoryID');
		const filtredProducts = products.filter((p) => p.categoryID.type === searchQuery);
		res.status(200).json(filtredProducts);
	} catch (e) {}
};
