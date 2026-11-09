import express from "express";
import sampleRouter from "./routes/sampleRoute.js";
import dotenv from 'dotenv';
import { connectToDB } from "./db.js";
import userRoutes from "./routes/userRoutes.js";
import { logger } from "./middlewares.js";
import recipeRoutes from "./routes/recipeRoute.js";

const app = express();
dotenv.config()
app.use(express.json());
app.use(logger);
const port = process.env.PORT || 3000
const db_url = process.env.DB_URL
app.use('/s', sampleRouter)
app.use('/users', userRoutes)
app.use('/recipes', recipeRoutes)

connectToDB(db_url).then(()=>{
    app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
    
})
}).catch(err=>{
    console.log(err);
    
})

