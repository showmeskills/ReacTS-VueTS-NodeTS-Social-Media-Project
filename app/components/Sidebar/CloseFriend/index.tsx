import Image from "next/image";
import {PropsWithChildren} from "react";
import {UsersData} from "@/mock/typings";
interface CloseFriendProps{
    user:UsersData;
}

const CloseFriend = (props:PropsWithChildren<CloseFriendProps>) => {
    const {user}=props;
    return (
        <li className="sidebarFriend">
            <Image src={user.profilePicture} alt="img" width={32} height={32} />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriend;