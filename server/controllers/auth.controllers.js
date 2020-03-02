const User = require('../models/User');
const { getJwt } = require('../utils/newToken');
const { verifyJwt } = require('../utils/verifyToken');
const { hashPassword, compareHashPassword } = require('../utils/passwordHash');

exports.verifyAuth = async (req, res, next) => {
	const bearer = req.headers.authorization;

	if (!bearer || !bearer.startsWith('Bearer ')) {
		return res.status(401).end();
	}

	const token = bearer.split('Bearer ')[1].trim();
	let payload;
	try {
		payload = await verifyJwt(token);
	} catch (e) {
		return res.status(401).end();
	}

	const user = await User.findById(payload.id).select('-password');

	if (!user) {
		return res.status(401).end();
	}

	req.user = user;
	next();
};

exports.register = async (req, res) => {
	const { name, password } = req.body;

	if (!name || !password) {
		return res.status(400).json({ message: 'need name and password' });
	}

	try {
		const hashedPassword = await hashPassword(password);
		const user = await User.create({ ...req.body, password: hashedPassword });
		return res.status(201).json({ msg: 'user created', user });
	} catch (e) {
		return res.status(500).json({ e });
	}
};

exports.login = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).send({ message: 'need email and password' });
	}

	const invalid = { message: 'invalid email password combination' };

	try {
		const user = await User.findOne({ email }).select('name password');

		if (!user) {
			return res.status(401).json(invalid);
		}

		const match = await compareHashPassword(password, user.password);

		if (!match) {
			return res.status(401).json(invalid);
		}

		const token = await getJwt({ ...req.body, password: null });

		return res.status(201).json(token);
	} catch (e) {
		console.log(e);
		res.status(500).end();
	}
};
