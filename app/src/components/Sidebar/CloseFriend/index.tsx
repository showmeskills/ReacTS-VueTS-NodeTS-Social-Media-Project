import {PropsWithChildren} from "react";
import {UsersData} from "@/mock/typings";
interface CloseFriendProps{
    user:UsersData;
}

const CloseFriend = (props:PropsWithChildren<CloseFriendProps>) => {
    const {user}=props;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="sidebarFriend">
            <img src={PF+user.profilePicture} alt="img" width={32} height={32} />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriend;