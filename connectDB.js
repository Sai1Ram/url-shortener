import mongoose from "mongoose";

const connectWithDatabase = async () => {
    try {
        const db = await mongoose.connect("mongodb://127.0.0.1:27017/url-shortener");
        console.log("Database connected "+db.connection.host);
    } catch (error) { 
        console.error("Error connecting to the database:", error);
    }
};

export default connectWithDatabase