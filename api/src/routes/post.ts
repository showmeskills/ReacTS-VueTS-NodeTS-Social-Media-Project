import express from 'express';
import Posts from "../controllers/posts"
const postRoutes = express.Router();
const posts = new Posts();

//create a post
postRoutes.post('/',posts.createPost)
//update a post
postRoutes.put("/:id",posts.updatePost);
//delete a post
postRoutes.delete("/:id",posts.deletePost);
//like a post
postRoutes.put("/:id/like",posts.like)
//get a post
postRoutes.get("/:id",posts.getPost)
//get timeline posts
postRoutes.get('/timeline/all',posts.getTimelinePost)

export default postRoutes;