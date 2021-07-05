import bcrypt from "bcrypt";


class Tools {
    //encrypt password
    hash=(myPlaintextPassword: string)=>{
        return new Promise((resolve, reject) => {
            bcrypt.hash(myPlaintextPassword, 10, (err, hash) => {
                if (err) reject(err);
                resolve(hash);
            })
        })
    }
    //decrypt password
    compare = (myPlaintextPassword:string,hash:string)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.compare(myPlaintextPassword,hash,(err,compare)=>{
                if(err) reject(err);
                resolve(compare);
            })
        })
    }
}

export default Tools