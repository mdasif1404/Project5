import express from 'express';
import { addUser, getUser, getUsers, loginUser } from '../controllers/userController.js';

const userRoutes = express.Router()


userRoutes.post('/add', addUser)
userRoutes.post('/login', loginUser)
userRoutes.get('/', getUsers)
userRoutes.get('/get', getUser)
export default userRoutes;