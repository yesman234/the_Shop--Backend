const { error } = require("console");
const express = require("express");
const products = require("./data/products");

const app = express();

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

app.listen(5000, console.log("Server running on port 5000"));
