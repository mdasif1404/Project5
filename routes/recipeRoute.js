import express from "express";

import {
    addRecipe,
    getRecipes,
    getRecipe,
    deleteRecipe
} from "../controllers/recipeController.js";

// import { verifyToken } from "../middleware/authMiddleware.js";

const recipeRoutes = express.Router();

// Public routes
recipeRoutes.get("/", getRecipes);
recipeRoutes.get("/:id", getRecipe);

// Protected routes
recipeRoutes.post("/add", addRecipe);
// recipeRoutes.delete("/:id", verifyToken, deleteRecipe);

export default recipeRoutes;