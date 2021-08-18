import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        max:500,
    },
    img:{
        type:String,
    },
    likes:{
        type:Array,
        default:[],
    }
},
{
    timestamps:true
}
)

export default mongoose.model("Post",PostSchema);
// {"_id":{"$oid":"60e30df39881600eb3d4ac46"},"likes":["60e1a1be3c86d4b61f13d302"],"userId":"60e1a1be3c86d4b61f13d302","desc":"hey this is my first post","createdAt":{"$date":"2021-07-05T13:49:39.552Z"},"updatedAt":{"$date":"2021-07-05T15:06:36.436Z"},"__v":0}
// {"_id":{"$oid":"60e1a1be3c86d4b61f13d302"},"profilePicture":"","coverPicture":"","followers":["60e1a70abfd19bb725feb1ec"],"followings":[],"isAdmin":false,"username":"Terry","password":"$2b$10$GASgJGCZAi2pLnHLS2l92OHgmVPQa3qr3rHL2z8.XBItNxhsu9ENG","email":"123456789@qq.com","createdAt":{"$date":"2021-07-04T11:55:42.154Z"},"updatedAt":{"$date":"2021-07-05T15:23:33.738Z"},"__v":0}