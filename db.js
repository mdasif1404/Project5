import mongoose from "mongoose";

export async function connectToDB(url) {
    try {
        await mongoose.connect(url)
        console.log("DB connected");
        
    } catch (error) {
        console.log(error);
        
    }
}