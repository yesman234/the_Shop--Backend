import mongoose from "mongoose";

const connDB = async () => {
	try {
		const url = process.env.MONGODB_URI;
		console.log(url);
		const conn = await mongoose.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		});
		console.log(`Mongodb connected: ${conn.connection.host}`.brightGreen);
	} catch (err) {
		console.log(`${err}+ connection db error`.brightRed);
	}
};
export default connDB;
