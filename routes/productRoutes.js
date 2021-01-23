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
	asyncHandler(async (req, res, err) => {
		const produxt = await Product.find({});
		res.json(produxt);
		if (err) {
			res.send("path error" + err);
		}
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
			res.send(product);
		} else {
			res.send("sorry charlie");
		}
	})
);
export default router;
