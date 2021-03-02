import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
const router = express.Router();

//products
// This will now be '/api/products' by default Hence name of file

//@desc fetch all products
//@route get req to /api/products
//@access Public
router.get(
	"/",
	asyncHandler(async (req, res) => {
		const products = await Product.find({});

		res.json(products);
	})
);
//@desc a single product
//@route get req to /api/products
//@access Public
router.get(
	"/:id",
	asyncHandler(async (req, res, err) => {
		const product = await Product.findById(req.params.id);

		if (product) {
			res.json(product);
		} else {
			res.status(401).json({ message: "product not found" });
		}
	})
);
export default router;
