import mongoose from "mongoose";

const connectToDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		});
		console.log(`MongoDB connected: ${conn.connection.host}`.green);
	} catch (error) {
		console.error(error.message.red);
		process.exit(1);
	}
};

export default connectToDB;
