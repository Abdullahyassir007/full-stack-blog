import mongoose from "mongoose";
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("DB connected successfully");
    }
    catch(err){
        console.log("Error in DB connection", err);
    }
}

export default connectDB;