import express from "express";
import dotenv from "dotenv";
import connDB from "./config/db.js";
import colors from "colors";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json);
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
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`${process.env.NODE_ENV}+ this is it${process.env.URL} server running on port ${PORT}`
			.brightYellow.bold
	)
);
