import Image from "next/image";
import {PropsWithChildren} from "react";
import { UsersData } from "@/mock/typings";
interface OnlineProps{
    user:UsersData;
}

const Online = (props:PropsWithChildren<OnlineProps>)=>{
    const {user}=props;
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <Image src={user.profilePicture} alt="person" width={40} height={40} />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}

export default Online;