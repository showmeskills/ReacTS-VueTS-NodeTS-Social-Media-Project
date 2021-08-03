import axios from "axios";
import {PropsWithChildren,useState,useEffect} from "react";


import { Topbar, Siderbar, Rightbar, Feed } from "@/components";

import post from "@/assets/post/1.jpeg";
import img from "@/assets/person/1.jpeg";
import {ProfileContainer} from "./style/profilestyle";
import {PostsData,UsersData} from "@/mock/typings";

interface ProfileProps{
    posts?:PostsData[]
    users?:UsersData[]
  }


const Profile = (props:PropsWithChildren<ProfileProps>) => {
    const [users, setUsers] = useState();
    const [posts, setPosts] = useState();
    const requestUsersAndPosts = async () => {
        try {
            const postResult = await axios("http://localhost:9000/api/posts");
            const userResult = await axios("http://localhost:9000/api/users");
            setUsers(userResult.data.users);
            setPosts(postResult.data.posts);
        } catch (err) {
            throw new Error("error");
        }

    }
    useEffect(() => {
        requestUsersAndPosts();
    }, [])
    return (
        <>
            <Topbar />
            <ProfileContainer>
                <Siderbar users={users}/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <div className="profileInfoImg">
                                <img 
                                    src={post} 
                                    alt=""
                                />
                            </div>
                            <div className="profileCoverImg">
                            <img 
                                src={img} 
                                alt=""
                                className="profileCoverImg"
                                width={150}
                                height={150}
                            />
                            </div>
                        </div>  
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Terry</h4>
                            <span className="profileInfoDesc">Hello my friend</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed posts={posts&&posts} users={users&&users}/>
                        <Rightbar profile={users&&users}/>
                    </div>
                </div>
            </ProfileContainer>
        </>
    )
}

// export const getStaticProps:GetStaticProps = async()=>{
//     const postResult = await axios("http://localhost:3000/api/posts");
//     const userResult = await axios("http://localhost:3000/api/users");
//     const posts = postResult.data.posts;
//     const users = userResult.data.users;
//     return{
//         props:{
//             posts,
//             users
//         }
//     }
//   }

export default Profile;