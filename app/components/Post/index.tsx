import Image from "next/image";
import {MoreVert} from "@material-ui/icons";
import {useState,PropsWithChildren} from "react";

import {UsersData} from "@/mock/typings";
import likeIcon from "@/public/assets/like.png";
import heartIcon from "@/public/assets/heart.png";
import {PostContainer} from "./style/poststyle";

interface PostProps{
    post:{
        id:number;
        desc?:string;
        photo:any;
        date:string;
        userId:number;
        like:number;
        comment:number
    };
    users:UsersData[];
}

const Post = (props:PropsWithChildren<PostProps>)=>{
    const {post,users} = props;
    const usersArr = users.filter(user=>user.id === post.userId);
    const [like,setLike] = useState(post.like);
    const [flag,setFlag] = useState(false);
    const handleLike = ()=>{
        setLike(flag? like+1 : like-1);
        setFlag(!flag);
    }
    return (
        <PostContainer>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Image src={usersArr[0].profilePicture} alt="img" width={32} height={32} />
                        <span className="postUsername">
                           {usersArr[0].username}
                        </span>
                        <span className="postDate">
                            {post.date}
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <Image 
                        src={post.photo} 
                        alt="post"
                        width={1100} 
                        height={500}
                        className="postImg"
                    />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <Image 
                            src={likeIcon} 
                            alt="likeIcon"
                            onClick={handleLike}
                        />
                        <Image 
                            src={heartIcon} 
                            alt="heartIcon"
                            onClick={handleLike}
                        />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </PostContainer>
    )
}


export default Post;