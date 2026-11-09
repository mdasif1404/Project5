import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: 3
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, {
    timestamps: true
});

const Recipe = model("recipe", recipeSchema);

export default Recipe;