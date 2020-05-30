const path = require("path");
const connect = require("./db/db");
const cors = require("cors");
const express = require("express");
const app = express();
const morgan = require("morgan");
const { json, urlencoded } = require("body-parser");
const { verifyAuth } = require("./controllers/auth.controllers");

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./swagger-config.js");
const swaggerDocs = swaggerJsDoc(swaggerOptions);

const authRouter = require("./routes/auth.router");
const testRouter = require("./routes/test.router");
const productRouter = require("./routes/product.router");
const categoryRouter = require("./routes/category.router");
const cartRouter = require("./routes/cart.router");
const orderRouter = require("./routes/order.router");

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// app.use('/api/test', testRouter);
app.use("/api/auth", authRouter);

app.use("/api", verifyAuth);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ error: { message: error.message } });
});

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
