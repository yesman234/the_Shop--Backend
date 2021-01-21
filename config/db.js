import mongoose from "mongoose";

const connDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		});
		console.log(`${conn.connection.host}`);
	} catch (error) {
		console.log(`${error}+ connection db error`);
	}
};
export default connDB;
