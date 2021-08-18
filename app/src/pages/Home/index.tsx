import axios from "axios";
import { useEffect, useState } from "react";


import { Topbar, Siderbar, Rightbar, Feed } from "@/components";
import { HomeContainer } from "@/pages/Home/styles/homestyle";
import { PostsData, UsersData } from "@/mock/typings";

const Home = () => {
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
            <HomeContainer>
                <Siderbar users={users && users} />
                <Feed posts={posts && posts} users={users && users} />
                <Rightbar users={users && users} />
            </HomeContainer>
        </>
    );
}

export default Home;