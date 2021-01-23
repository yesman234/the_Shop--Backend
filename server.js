import express from "express";
import dotenv from "dotenv";
import connDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";

const app = express();

dotenv.config();
connDB();
//home
app.get("/", (req, res, err) => {
	res.send("Api running");
	if (err) {
		res.send("path error" + err);
	}
});
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`${process.env.NODE_ENV} server running on port ${PORT}`.brightYellow.bold
	)
);
