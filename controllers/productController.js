import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

//@desc Fetch all products
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
	const products = Product.find({});
	res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findOne(req.params.id);
	if (product) {
		res.json(product);
	} else {
		res.status(404, "page not found");
	}
});

export { getProductById, getProducts };