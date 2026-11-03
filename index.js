import express from "express";
import sampleRouter from "./routes/sampleRoute.js";
import dotenv from 'dotenv';
import { connectToDB } from "./db.js";

const app = express();
dotenv.config()
app.use(express.json());
console.log();
const port = process.env.PORT || 3000
const db_url = process.env.DB_URL
app.use('/s', sampleRouter)

connectToDB(db_url).then(()=>{
    app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
    
})
}).catch(err=>{
    console.log(err);
    
})

