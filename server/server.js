const connect = require("./db/db");
const cors = require("cors");
const express = require("express");
const app = express();
const { json, urlencoded } = require("body-parser");
const { verifyAuth } = require("./controllers/auth.controllers");

const authRouter = require("./routes/auth.router");
const testRouter = require("./routes/test.router");
const productRouter = require("./routes/product.router");
const categoryRouter = require("./routes/category.router");
const cartRouter = require("./routes/cart.router");
const orderRouter = require("./routes/order.router");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// app.use('/api/test', testRouter);
app.use("/api/auth", authRouter);

// app.use('/api', verifyAuth);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

module.exports = async () => {
  try {
    await connect();
    app.listen(process.env.PORT || 8080, () => {
      console.log(`REST API on http://localhost:${process.env.PORT}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
