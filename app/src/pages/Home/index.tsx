import { useEffect, useState } from "react";
import { useAxios } from "@/services/useAxios";
import { Topbar, Siderbar, Rightbar, Feed } from "@/components";
import { HomeContainer } from "@/pages/Home/styles/homestyle";


const Home = () => {
    const [users, setUsers] = useState();
    const [posts, setPosts] = useState();
    const {axios}=useAxios()
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