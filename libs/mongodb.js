import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to Database')
    } catch (error) {
        console.log('Error', error);
    }
}

export default connectMongoDB;

