const Category = require('../models/Category');
const Product = require('../models/Product');

exports.getAllCategories = async (req, res) => {
	try {
		const ids = await Category.find({ type: 'milk' }).select('_id');
		res.json(ids);
	} catch (e) {
		res.json({ e });
	}
};

exports.categoryCreate = async (req, res) => {
	const { type } = req.body;
	try {
		const category = await Category.create({
			type
		});
		res.json({ category });
	} catch (e) {
		res.json({ e });
	}
};

exports.getAllProducts = async (req, res) => {
	try {
		const p = await Product.find({});
		res.json({ products: p, user: req.user });
	} catch (e) {
		res.json(e);
	}
};

exports.productCreate = async (req, res) => {
	const { pName, categoryID, cost, imageURL } = req.body;
	try {
		const product = await Product.create({
			pName,
			categoryID,
			cost,
			imageURL
		});
		res.json({ product });
	} catch (e) {
		res.json({ e });
	}
};
