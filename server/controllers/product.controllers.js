const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({}).populate('categoryID');
		const user = req.user;
		res.status(200).json(products);
	} catch (e) {
		return res.status(401).end();
	}
};

exports.searchByInput = async (req, res) => {
	try {
		const searchText = req.params.search;
		const products = await Product.find({}).populate('categoryID');
		const filtredProducts = products.filter((p) => p.pName.toLowerCase().includes(searchText.toLowerCase()));
		res.status(200).json(filtredProducts);
	} catch (e) {
		return res.status(401).json(e);
	}
};

exports.searchProductByCategory = async (req, res) => {
	try {
		const searchQuery = req.query.search;
		const products = await Product.find({}).populate('categoryID');
		const filtredProducts = products.filter((p) => p.categoryID.type === searchQuery);
		res.status(200).json(filtredProducts);
	} catch (e) {}
};
