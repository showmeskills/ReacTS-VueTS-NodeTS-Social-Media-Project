import { PropsWithChildren } from "react";
import { FeedContainer } from "./style/feed";
import Share from "@/components/Share";

import Post from "@/components/Post";

import { PostsData,UsersData } from "@/mock/typings";

interface FeedProps {
    posts?:PostsData[]
    users?:UsersData[]
}


const Feed = (props: PropsWithChildren<FeedProps>) => {
    const { posts,users } = props;
    return (
        <FeedContainer>
            <div className="feedWrapper">
                <Share />
                {
                    users&&posts&&posts.map((post: PostsData) => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                                users={users}
                            />
                        )
                    })
                }
            </div>
        </FeedContainer>
    )
}




export default Feed;