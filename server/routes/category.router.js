const { Router } = require("express");
const router = Router();
const categoryController = require("../controllers/category.controllers");

/**
 * @swagger
 * /api/category:
 *  get:
 *    description: Use to request all categories
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400' :
 *        description: A bad request
 */
router.get("/", categoryController.getAllCategory);

module.exports = router;
