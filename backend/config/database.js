import mongoose from "mongoose";

export const dbConnection = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${connect.connection.host}`)
    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}