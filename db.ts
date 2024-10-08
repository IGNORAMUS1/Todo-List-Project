import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

 const connectDb = async () => {
   try {
    await mongoose.connect(process.env.MONGODB_URL!)
    console.log('MongoDB is connected.')
   }
    catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
      }
}
export default connectDb;