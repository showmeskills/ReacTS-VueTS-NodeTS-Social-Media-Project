import bcrypt from "bcrypt";
import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";


interface Itools{
    hash(myPlaintextPassword:string):Promise<string>;
    compare(myPlaintextPassword:string,hash:string):Promise<boolean>;
    token(username?:string):string;
    tokenDecode(token:string): string | jwt.JwtPayload;
}

class Tools implements Itools {
    hash (myPlaintextPassword:string):Promise<string>{
        return new Promise<string>((resolve, reject)=>{
            bcrypt.hash(myPlaintextPassword,10,(err, hash)=>{
                if(err) {reject(err);}
                resolve(hash);
            })
        })
    }
    
    compare(myPlaintextPassword:string,hash:string):Promise<boolean>{
        return new Promise<boolean>((resolve, reject)=>{
            bcrypt.compare(myPlaintextPassword,hash,(err,compare)=>{
                if(err) {reject(err);}
                resolve(compare);
            })
        })
    }
    
    token(username?:string):string{
        const privateKey = fs.readFileSync(path.join(__dirname,"..","config","rsa_private_key.pem"))
        const token = jwt.sign({username},privateKey,{algorithm:"RS256"})
        return token;
    }
    
    tokenDecode(token:string): string | jwt.JwtPayload{
        const publicKey = fs.readFileSync(path.join(__dirname, "..","config","rsa_public_key.pem"))
        const result = jwt.verify(token,publicKey);
        return result;
    }
}

export default Tools