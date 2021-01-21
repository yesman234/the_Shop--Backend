import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import connDB from "./config/db.js";
import colors from "colors";

const app = express();

dotenv.config();
connDB();
//home
app.get("/", (req, res, err) => {
	res.send("Api running");
	if (error) {
		res.send("path error");
	}
});

//products
app.get("/api/products", async (req, res, err) => {
	const produxt = await products;
	res.send(produxt);
	if (error) {
		res.send("path error");
	}
});
app.get("/api/products/:id", (req, res, err) => {
	const product = products.find((p) => p._id === req.params.id);
	res.send(product);

	if (error) {
		res.send("path error");
	}
});
const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`${process.env.NODE_ENV} server running on port ${PORT}`.brightYellow.bold
	)
);
