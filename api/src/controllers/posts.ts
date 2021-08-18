import Post from "../models/Post";
import Users from "../models/Users";
import { Response, Request } from 'express';
class Posts {
    async createPost(req: Request, res: Response) {
        const newPost = new Post(req.body);
        try {
            await newPost.save();
            res.status(200).send({
                data: {
                    code: 0,
                    message: 'you have successfully post'
                }
            })
        } catch (err) {
            res.status(500).send({
                data: {
                    code: 1,
                    error: "error in post"
                }
            })
        }
    }
    async updatePost(req: Request, res: Response) {
        try {
            const post = await Post.findById(req.params.id);//post:_id
            //post表中的userId === req.body.userId?
            if (post.userId === req.body.userId) {
                await post.updateOne({
                    $set:req.body,
                })
                res.status(200).send({
                    data:{
                        code:1,
                        message: "your post has been updated"
                    }
                })
            } else {
                res.status(403).send({
                    data: {
                        code: 0,
                        message: "you can update only your post"
                    }
                })
            }
        } catch (err) {
            res.status(500).send({
                err:"error"
            });
        }
    }
    async deletePost(req: Request, res: Response) {
        try {
            const post = await Post.findById(req.params.id);//post:_id
            //post表中的userId === req.body.userId?
            if (post.userId === req.body.userId) {
                await post.deleteOne();
                res.status(200).send({
                    data:{
                        code:1,
                        message: "your post has been deleted"
                    }
                })
            } else {
                res.status(403).send({
                    data: {
                        code: 0,
                        message: "you can delete only your post"
                    }
                })
            }
        } catch (err) {
            res.status(500).send({
                err:"error"
            });
        }
    }
    async like (req: Request, res: Response){
        try{
            const post = await Post.findById(req.params.id);
            if(!post.likes.includes(req.body.userId)){
                await post.updateOne({
                    $push:{
                        likes:req.body.userId
                    }
                })
                res.status(200).send({
                    data:{
                        code:0,
                        message:"ths post has been liked"
                    }
                })
            }else{
                await post.updateOne({
                    $pull:{
                        likes:req.body.userId
                    }
                })
                res.status(200).send({
                    data:{
                        code:0,
                        message:"the post has been disliked"
                    }
                })
            }
        }catch(err){
            res.status(500).send({
                data:{
                    error:"error"
                }
            })
        }
    }
    async getPost (req: Request, res: Response) {
        try{
            const post = await Post.findById(req.params.id)
            res.status(200).send({
                data:{
                    code:0,
                    post,
                }
            })
        }catch(err){
            res.status(500).send({
                data:{
                    code:1,
                    error: "error"
                }
            })
        }
    }
    async getTimelinePost(req: Request, res: Response){
        try{
            const currentUser = await Users.findById(req.params.userId);
            const userPosts = await Post.find({
                userId:currentUser._id,
            })
            const friendPosts = await Promise.all(
                currentUser.followings.map((friendId:string)=>Post.find({userId:friendId}))
            )
            res.status(200).json(userPosts.concat(...friendPosts))
        }catch(err){
            res.status(500).send({
                data:{
                    code:0,
                    error: "error"
                }
            })
        }
    }
    async getOneUserAllPosts(req: Request, res: Response){

    }
}

export default Posts;