import Image from "next/image";
import { GetStaticProps } from "next";
import axios from "axios";
import {PropsWithChildren} from "react";


import { Topbar, Siderbar, Rightbar, Feed } from "@/components";

import post from "@/public/assets/post/1.jpeg";
import img from "@/public/assets/person/1.jpeg";
import {ProfileContainer} from "@/styles/profilestyle";
import {PostsData,UsersData} from "@/mock/typings";

interface ProfileProps{
    posts:PostsData[]
    users:UsersData[]
  }


const Profile = (props:PropsWithChildren<ProfileProps>) => {
    const {posts, users} = props;
    return (
        <>
            <Topbar />
            <ProfileContainer>
                <Siderbar users={users}/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <div className="profileInfoImg">
                                <Image 
                                    src={post} 
                                    alt=""
                                    objectFit="cover"
                                />
                            </div>
                            <div className="profileCoverImg">
                            <Image 
                                src={img} 
                                alt=""
                                objectFit="cover"
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
                        <Feed posts={posts} users={users}/>
                        <Rightbar profile={users}/>
                    </div>
                </div>
            </ProfileContainer>
        </>
    )
}

export const getStaticProps:GetStaticProps = async()=>{
    const postResult = await axios("http://localhost:3000/api/posts");
    const userResult = await axios("http://localhost:3000/api/users");
    const posts = postResult.data.posts;
    const users = userResult.data.users;
    return{
        props:{
            posts,
            users
        }
    }
  }

export default Profile;