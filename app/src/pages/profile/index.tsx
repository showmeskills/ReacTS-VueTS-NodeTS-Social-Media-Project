import { useState, useEffect } from "react";
import {useAxios} from "@/services/useAxios";
import { Topbar, Siderbar, Rightbar, Feed } from "@/components";


import { ProfileContainer } from "./style/profilestyle";




const Profile = () => {
    const [users, setUsers] = useState();
    const [posts, setPosts] = useState();
    const {axios} = useAxios();
    const oneUser = process.env.REACT_APP_PUBLIC_FOLDER + "post/1.jpeg";
    const onePost = process.env.REACT_APP_PUBLIC_FOLDER + "/person/1.jpeg";
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
        //requestUsersAndPosts();
    }, [])
    return (
        <>
            <Topbar />
            <ProfileContainer>
                <Siderbar users={users} />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <div className="profileInfoImg">
                                    <img
                                        src={oneUser}
                                        alt=""
                                    />
                            </div>
                            <div className="profileCoverImg">
                                <img
                                    src={onePost}
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
                        <Feed posts={posts && posts} users={users && users} />
                        <Rightbar profile={users && users} />
                    </div>
                </div>
            </ProfileContainer>
        </>
    )
}

export default Profile;