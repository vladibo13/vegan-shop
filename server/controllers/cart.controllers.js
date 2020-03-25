const Cart = require('../models/Cart');
const CartInfo = require('../models/CartInfo');
// const User = require('../models/User');

exports.ifCartExist = async (req, res) => {
	const user = Cart.find({}).populate('user');
};

exports.createCart = async (req, res) => {
	const { userID } = req.body;
	console.log('user id from server', userID);
	try {
		const cart = await Cart.create({ userID });
		res.json(cart);
	} catch (e) {
		res.json(e);
	}
};

exports.addProductToCart = async (req, res) => {
	const { productID, amount, price, cartID } = req.body;
	console.log('BODY = ', req.body);
	try {
		const cartInfo = await CartInfo.create({
			productID,
			amount,
			price,
			cartID
		});
		res.status(200).json(cartInfo);
	} catch (e) {
		res.status(401).json(e);
	}
};

exports.getCartProducts = async (req, res) => {
	try {
		const cartProducts = await CartInfo.find({}).populate('productID');
		res.status(200).json(cartProducts);
	} catch (e) {
		res.status(401).json(e);
	}
};

exports.deleteCartProduct = async (req, res) => {
	const { cartInfoID } = req.body;
	try {
		const cartProduct = await CartInfo.deleteOne({ _id: cartInfoID });
		res.status(200).json({ cartProduct, msg: 'deleted' });
	} catch (e) {
		res.status(401).json(e);
	}
};
