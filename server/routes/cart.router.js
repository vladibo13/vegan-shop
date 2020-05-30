const { Router } = require("express");
const router = Router();
const cartController = require("../controllers/cart.controllers");

router.post("/", cartController.createCart);
router.post("/addProduct", cartController.addProductToCart);
/**
 * @swagger
 * /api/cart:
 *  get:
 *    description: Use to request all cart products
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400' :
 *        description: A bad request
 *      '401':
 *        unauthorized request
 */
router.get("/", cartController.getCartProducts);
router.get("/:cartId", cartController.getCartProductsByID);
router.get("/totalPrice/:id", cartController.getTotalPrice);
router.delete("/", cartController.deleteCartProduct);

module.exports = router;
