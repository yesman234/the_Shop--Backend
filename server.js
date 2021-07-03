import express from "express";
import helmet from 'helmet';
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import connDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const whiteList = ['http://localhost:3000', 'http://localhost:5000', 'https://arcane-temple-22586.herokuapp.com/']
const corsOptions = {
	origin: function (origin, callback) {
		console.log("** origin requested " + origin)
		if (whiteList.indexOf(origin) !== -1 || origin) {
			console.log("origin acceptable")
			callback(null, true)
		} else {
			console.log("Origin rejected")
			callback(new Error('Not allowed by cors'))
		}
	}
}
app.use(helmet());
app.use(cors(corsOptions))
app.use(express.json());
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

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'front-end/build')));
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'front-end/build', 'index.html'))
	})
}

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`${process.env.NODE_ENV} + this is it${process.env.URL} server running on port ${PORT}`
			.brightYellow.bold
	)
);
