import { Request, Response, NextFunction } from "express";
export const auth = async(req: Request, res: Response, next: NextFunction) => {
    const token = await req.get("X-Durandal-Access-Token")
    if (token) {
        next();
    } else {
        res.render("fail", {
            data: JSON.stringify({
                message: "Please logged in"
            })
        })
    }
}

