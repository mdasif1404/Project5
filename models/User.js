import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 15
    },
    email: {
        type: String,
        required: true,
        unique: [true, "User Exists"]
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Others"],
        required: true
    }
})

const User = model("user", userSchema)

export default User;