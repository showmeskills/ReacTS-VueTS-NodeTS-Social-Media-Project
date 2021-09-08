import { Request, Response } from "express";
import Users from "../models/Users";
import Tools from "../utils/tools";
const tools = new Tools();
class User {
    async updataUser(req: Request, res: Response) {
        if (req.body.userId === req.params.id || req.body.isAdmin) {
            if (req.body.password) {
                try {
                    const user:any = await Users.findById(req.body.userId)
                    const { password: hash } = user;
                    const result = await tools.compare(req.body.password, hash);
                    if (result) {
                        try {
                            req.body.password = await tools.hash(req.body.password)
                        } catch (e) {
                            return res.status(500).send({
                                data: {
                                    code: 0,
                                    message: "update your password has been failure"
                                }
                            })
                        }
                    } else {
                        return res.status(500).send({
                            data: {
                                code: 1,
                                message: "original password is incorrect"
                            }
                        })
                    }
                } catch (e) {
                    res.status(500).send({
                        data: {
                            code: 0,
                            message: "failure updating your password"
                        }
                    })
                }
            }
            try {
                const user = await Users.findOneAndUpdate(
                    { _id: req.params.id },
                    { $set: req.body },
                )
                user && res.status(200).send({
                    data: {
                        code: 1,
                        message: "successfull update your password"
                    }
                })
            } catch (err) {
                res.status(500).send({
                    data: {
                        code: 0,
                        message: "failure updating your password"
                    }
                })
            }
        } else {
            return res.status(403).send({
                data: {
                    code: 1,
                    message: "you can update only your account!"
                }
            })
        }
    };
    async deleteUser(req: Request, res: Response) {
        if (req.body.userId === req.params.id || req.body.isAdmin) {
            try {
                const user = await Users.deleteOne(
                    { _id: req.body.userId }
                )
                res.status(200).send({
                    data: {
                        code: 0,
                        message: "your account has been deleted"
                    }
                })
            } catch (err) {
                res.status(500).send({
                    data: {
                        code: 1,
                        message: "there something went wrong"
                    }
                })
            }
        } else {
            return res.status(404).send({
                data: {
                    code: 1,
                    message: "you cannot delete your account, because account is not compared"
                }
            })
        }
    };
    async getUser(req: Request, res: Response) {
        try {
            const user: any = await Users.findById(req.params.id)
            if (user) {
                const { password, updateAt, ...other } = user._doc;
                res.status(200).send({
                    data: {
                        code: 0,
                        other,
                    }
                })
            } else {
                return res.status(404).send({
                    data: {
                        code: 1,
                        message: "there are not user"
                    }
                })
            }
        } catch (err) {
            res.status(500).send({
                data: {
                    err
                }
            })
        }
    }
    async getUsers(req: Request, res: Response) {
        try {
            const user = await Users.find().sort({ _id: -1 });

            res.status(200).send({
                data: {
                    code: 0,
                    user
                }
            })
        } catch (err) {
            res.status(500).send({
                data: {
                    code: 1,
                    err,
                }
            })
        }
    }
    async followUser(req: Request, res: Response) {
        if (req.body.userId !== req.params.id) {
            try {
                const user:any = await Users.findById(req.params.id);
                const currentUser = await Users.findById(req.body.userId);
                if (!user.followers.includes(req.body.userId)) {
                    await user.updateOne({
                        $push: {
                            followers: req.body.userId
                        }
                    })
                    await currentUser.updateOne({
                        $push: {
                            followings: req.params.id
                        }
                    })
                    res.status(200).send({
                        data:{
                            code:0,
                            message:"user has been followed"
                        }
                    })
                } else {
                    res.status(403).send({
                        data: {
                            code: 1,
                            message: "you already follow this user"
                        }
                    })
                }
            } catch (err) {
                res.status(500).send({
                    code: 1,
                    err,
                })
            }
        } else {
            res.status(403).send({
                data: {
                    code: 1,
                    message: "you can\'t follow yourself",
                }
            })
        }
    }
    async unFollowUser(req: Request, res: Response){
        if (req.body.userId !== req.params.id) {
            try {
                const user:any = await Users.findById(req.params.id);
                const currentUser = await Users.findById(req.body.userId);
                if (user.followers.includes(req.body.userId)) {
                    await user.updateOne({
                        $pull: {
                            followers: req.body.userId
                        }
                    })
                    await currentUser.updateOne({
                        $pull: {
                            followings: req.params.id
                        }
                    })
                    res.status(200).send({
                        data:{
                            code:0,
                            message:"user has been unfollowed"
                        }
                    })
                } else {
                    res.status(403).send({
                        data: {
                            code: 1,
                            message: "you already unfollow this user"
                        }
                    })
                }
            } catch (err) {
                res.status(500).send({
                    code: 1,
                    err,
                })
            }
        } else {
            res.status(403).send({
                data: {
                    code: 1,
                    message: "you can\'t unfollow yourself",
                }
            })
        }
    }
}

export default User;