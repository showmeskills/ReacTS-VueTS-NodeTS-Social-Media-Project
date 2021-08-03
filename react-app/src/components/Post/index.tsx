import {MoreVert} from "@material-ui/icons";
import {useState,PropsWithChildren} from "react";

import {UsersData} from "@/mock/typings";
import likeIcon from "@/assets/like.png";
import heartIcon from "@/assets/heart.png";
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
    const PF =process.env.REACT_APP_PUBLIC_FOLDER;
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
                        <img src={PF+usersArr[0].profilePicture} alt="img" width={32} height={32} />
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
                    <img 
                        src={PF+post.photo} 
                        alt="post"
                        width={1100} 
                        height={500}
                        className="postImg"
                    />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img 
                            src={likeIcon} 
                            alt="likeIcon"
                            onClick={handleLike}
                        />
                        <img 
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