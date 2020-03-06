const connect = require('./db/db');
const { json, urlencoded } = require('body-parser');
const { verifyAuth } = require('./controllers/auth.controllers');
const cors = require('cors');
const express = require('express');
const app = express();
const authRouter = require('./routes/auth.router');
const testRouter = require('./routes/test.router');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/auth', authRouter);
// app.use('/api', verifyAuth);
app.use('/api/test', testRouter);

module.exports = async () => {
	try {
		await connect();
		app.listen(process.env.PORT, () => {
			console.log(`REST API on http://localhost:${process.env.PORT}/api`);
		});
	} catch (e) {
		console.error(e);
	}
};
