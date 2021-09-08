import { Request, Response } from "express";
import User from "../models/Users";
import Tools from "../utils/tools";
const tools = new Tools();

class Auth {
    code: number = 0;
    message: string = "";
    //register functions
    async register(req: Request, res: Response) {
        const {
            username,
            email,
            password
        } = req.body;
        try {
            const user = await User.findOne({
                username
            })
            if (user) {
                return res.status(200).send({
                    data: {
                        code: 1,
                        message: "username is existed"
                    }
                })
            } else {
                const bcryptPassword = await tools.hash(password);
                try {
                    const user = await new User({
                        username,
                        password: bcryptPassword,
                        email,
                    })
                    const result = await user.save();
                    res.status(200).send({
                        data:{
                            code:0,
                            message:"register successfully",
                            result
                        }
                    })
                } catch (e) {
                    res.status(500).send({
                        data:{
                            code:2,
                            message:"register failured"
                        }
                    })
                }
            }
        } catch (e) {
            res.status(500).send({
                data: {
                    code: 2,
                    message: "system has a big issue"
                }
            })
        }
    }
    async login(req:Request,res:Response){
        const {email,password} = req.body
        try{
            const user:any = await User.findOne({
                email,
            })
            if(user.email){
                const {password:hash} = user;
                const result = await tools.compare(password,hash);
                if(result){
                    res.status(200).send({
                        data:{
                            code:0,
                            message:"login successfully"
                        }
                    })
                }else{
                   res.status(400).send({
                       data:{
                         code:1,
                         message:"email or password is incorrect"
                       }
                   })
                }
            }else{
                res.status(404).send({
                    data:{
                        code:1,
                        message:"current user is not existed"
                    }
                })
            }
        }catch(e){
            res.status(500).send({
                data:{
                    code:1,
                    message:"login has been an issue"
                }
            })
        }
    }
}

export default Auth;