import Recipe from "../models/Recipe.js";

export const addRecipe = async (req, res) => {

    const {
        title,
        description,
        ingredients
    } = req.body;

    try {

        let recipeRecord = new Recipe({
            title,
            description,
            ingredients: ingredients.split(", "),
            author: req.user.id
        });
        console.log(req.user);
        
        let {_id} = await recipeRecord.save();

        res.status(201).json({
            message: "Recipe Added Successfully",
            _id
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};

export const getRecipes = async (req, res) => {

    try {

        let recipes = await Recipe.find()
            .populate("author", "name email");

        res.status(200).json({
            message: "Success",
            recipes
        });

    } catch (err) {

        res.status(500).json({
            message: "Failed to fetch recipes"
        });

    }
};

export const getRecipe = async (req, res) => {

    const {id} = req.params;

    try {

        let recipe = await Recipe.findById(id)
            .populate("author", "name email");

        if (!recipe) {
            return res.status(404).json({
                message: "Recipe not found"
            });
        }

        res.status(200).json({
            message: "Success",
            recipe
        });

    } catch (err) {

        res.status(500).json({
            message: "Failed to fetch recipe"
        });

    }
};