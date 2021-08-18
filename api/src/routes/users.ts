import express from 'express';
import User from "../controllers/users";
const usersRoutes = express.Router();
const user = new User();

//update user
usersRoutes.put('/:id',user.updataUser);
//delete user
usersRoutes.delete('/:id',user.deleteUser);
//get a user
usersRoutes.get('/:id',user.getUser);
usersRoutes.get("/",user.getUsers);
//follow a user
usersRoutes.put("/:id/follow",user.followUser)
//unfollow a user
usersRoutes.put("/:id/unfollow",user.unFollowUser)
export default usersRoutes;