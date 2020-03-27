const Product = require('../models/Product');
const Category = require('../models/Category');

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

exports.updateProductByID = async (req, res) => {
	console.log('BODY = ', req.body);

	const { _id, pName, price, imageURL } = req.body;
	try {
		const updatedProduct = await Product.updateOne({ _id }, { $set: { pName, price, imageURL } });
		// updateOne({ _id: ObjectId('0123456789abcdef01234567') }, { $set: { my_test_key4: 4 } });
		res.json({ msg: 'updated', updatedProduct });
	} catch (e) {
		return res.status(400).json(e);
	}
};

exports.createProduct = async (req, res) => {
	const { name, image, type, price } = req.body;
	console.log('new category body', req.body);
	try {
		const category = await Category.find({ type });
		console.log(category);
		//not found
		if (!category.length) {
			console.log('inside new category');
			const newCategory = await Category.create({ type });
			console.log(newCategory, 'new category');
			const product = await Product.create({
				pName: name,
				imageURL: image,
				price,
				categoryID: newCategory._id
			});
			return res.status(200).json({
				msg: 'category not found, new category created',
				product
			});
		}
		//category found
		const product = await Product.create({
			pName: name,
			imageURL: image,
			price,
			categoryID: category[0]._id
		});
		res.status(200).json({ msg: 'category found', product });
	} catch (e) {
		return res.status(400).json(e);
	}
};
