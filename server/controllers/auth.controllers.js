const User = require('../models/User');
const { getJwt } = require('../utils/newToken');
const { hashPassword, compareHashPassword } = require('../utils/passwordHash');

exports.signup = async (req, res) => {
	if (!req.body.email || !req.body.password) {
		return res.status(400).json({ message: 'need email and password' });
	}

	try {
		const hashedPassword = await hashPassword(req.body.password);
		const user = await User.create({ ...req.body, password: hashedPassword });
		return res.status(201).json({ user });
	} catch (e) {
		return res.status(500).json({ e });
	}
};

exports.signin = async (req, res) => {
	if (!req.body.email || !req.body.password) {
		return res.status(400).send({ message: 'need email and password' });
	}

	const invalid = { message: 'invalid email password combination' };

	try {
		const user = await User.findOne({ email: req.body.email }).select('email password');

		if (!user) {
			return res.status(401).json(invalid);
		}

		const match = await compareHashPassword(req.body.password, user.password);

		if (!match) {
			return res.status(401).json(invalid);
		}

		const token = await getJwt({ ...req.body, password: null });

		return res.status(201).json({ token });
	} catch (e) {
		console.log(e);
		res.status(500).end();
	}
};
