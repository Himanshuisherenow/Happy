import mongoose from "mongoose";


const connectDB = async() =>{
  try {
    

    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
    console.log(`\n MongoDB connected!!! DB HOST : ${connectionInstance.connection.host}`)

   await mongoose.connection.close();

    console.log('MongoDB connection closed');
  } catch (error) {
    
    console.error('An unexpected error occurred:', error.message);
    process.exit(1)
  }
}

export default connectDB;
