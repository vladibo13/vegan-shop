const { Router } = require("express");
const router = Router();
const productController = require("../controllers/product.controllers");

/**
 * @swagger
 * /api/product:
 *  get:
 *    description: Use to request all products
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400' :
 *        description: A bad request
 */
router.get("/", productController.getAllProducts);

router.get("/s/c", productController.searchProductByCategory);
router.get("/:search", productController.searchByInput);
router.get("/t/p", productController.amountOfProducts);
router.put("/", productController.updateProductByID);
router.post("/", productController.createProduct);

module.exports = router;
