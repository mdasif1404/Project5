import { hash, compare } from 'bcrypt';
import userModel from '../models/User.js'
import jwt from 'jsonwebtoken';

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {

        let user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        let isMatch = await compare(password, user.password);


        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        let token = await jwt.sign({name: user.name, email: user.email, age: user.age}, "ABCDE", {expiresIn: '10m'})
        console.log(token);
        
        res.status(200).json({
            message: "Login Successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });
    }
}
export const addUser = async (req, res) => {
    
    const {name, age, email, password, gender} = req.body;

    try {
        let userExist = await userModel.find({email: email}).select("-password")
        if(userExist){
            let err = new Error("User already Exists") 
            throw err;
        }
        let hashPwd = await hash(password, 10)
        let userRecord = new userModel({
        name: name,
        age: age,
        email: email,
        password: hashPwd,
        gender: gender
    })
    
    
    let {_id} = await userRecord.save()
    
    res.status(201).json({msg: "Success", _id})
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

export const getUsers = async (req, res) => {
    
    try {
        let users = await userModel.find().select("-password")
        res.status(200).json({message: "Success", users})
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Failed to fetch recipes"
        });
    }
};

export const getUser = async (req, res) => {
    const {email} = req.body;
    try {
        let users = await userModel.find({email: email}).select("-password")
        res.status(200).json({message: "Success", users})
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Failed to fetch User"
        });
    }
};