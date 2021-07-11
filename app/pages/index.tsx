import { GetStaticProps } from "next";
import axios from "axios";
import {PropsWithChildren} from "react";

import {Topbar,Siderbar,Rightbar,Feed} from "@/components";
import {HomeContainer} from "@/styles/homestyle";
import {PostsData,UsersData} from "@/mock/typings";

interface HomeProps{
  posts:PostsData[]
  users:UsersData[]
}

export default function Home(props:PropsWithChildren<HomeProps>) {
  const {posts,users} = props;
  return (
    <>
      <Topbar/>
      <HomeContainer>
        <Siderbar users={users}/>
        <Feed posts={posts} users={users}/>
        <Rightbar users={users}/>
      </HomeContainer>
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
