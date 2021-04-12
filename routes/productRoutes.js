import express from "express";
const router = express.Router();
import {
	getProducts,
	getProductById
} from "../controllers/productController.js";
//products
// This will now be '/api/products' by default Hence name of file

//@desc fetch all products
//@route get req to /api/products
//@access Public
router.route("/").get(getProducts);
//@desc a single product
//@route get req to /api/products
//@access Public
router.route("/:id").get(getProductById);

export default router;
