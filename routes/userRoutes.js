import express from 'express';
import { addUser, getUser, getUsers } from '../controllers/userController.js';

const userRoutes = express.Router()

userRoutes.post('/add', addUser)
userRoutes.get('/', getUsers)
userRoutes.get('/get', getUser)

export default userRoutes;