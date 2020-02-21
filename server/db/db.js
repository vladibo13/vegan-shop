require('dotenv').config();
const mongoose = require('mongoose');

module.exports = () => {
	return mongoose.connect(
		process.env.DB_URL,
		{
			useUnifiedTopology: true,
			useNewUrlParser: true
		},
		(e, conn) => {
			if (e) console.log(e);
			console.log('connected to DB');
		}
	);
};
