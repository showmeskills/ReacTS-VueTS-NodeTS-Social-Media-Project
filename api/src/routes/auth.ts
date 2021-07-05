import express from 'express';
import Auth from "../controllers/auth";

const authRoutes = express.Router();
const auth = new Auth();

authRoutes.post("/register",auth.register);
authRoutes.post("/login",auth.login);

export default authRoutes;