import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import usersRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import postRoutes from "./routes/post";

const app = express();
let port:number;
dotenv.config();
if(process.env.NODE_ENV === 'production'){
    port=8000;
}else{
    port=3001;
}

mongoose.connect(
    process.env.MONGO_URL!,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    ()=>console.log("db is Connected")
)
mongoose.set('useFindAndModify', false)

app.use(cors({origin:true}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",usersRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/posts",postRoutes);

app.listen(port,()=>console.log(port+"is listening"));

