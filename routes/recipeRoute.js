import express from "express";

import {
    addRecipe,
    getRecipes,
    getRecipe
} from "../controllers/recipeController.js";

import { authenticateUser } from "../middlewares.js";

// import { verifyToken } from "../middleware/authMiddleware.js";

const recipeRoutes = express.Router();

// Public routes
recipeRoutes.get("/", authenticateUser, getRecipes);
recipeRoutes.get("/:id", getRecipe);

// Protected routes
recipeRoutes.post("/add", authenticateUser, addRecipe);
// recipeRoutes.delete("/:id", verifyToken, deleteRecipe);

export default recipeRoutes;