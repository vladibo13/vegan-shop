const jwt = require('jsonwebtoken');

function verifyJwt(t) {
	return new Promise((resolve, reject) => {
		jwt.verify(t, process.env.SECRET, (err, payload) => {
			if (err) return reject(err);
			resolve(payload);
		});
	});
}

module.exports = { verifyJwt };
