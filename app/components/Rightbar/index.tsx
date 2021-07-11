import Image from "next/image";
import { PropsWithChildren } from "react";
import birthdayImage from "@/public/assets/gift.png";
import rightbarAd from "@/public/assets/ad.png";
import Online from "@/components/Rightbar/Online";
import { RightbarContainer } from "./style/rightbar";
import { UsersData } from "@/mock/typings";
import img from "@/public/assets/person/1.jpeg";
interface RightbarProps {
    users?: UsersData[]
    profile?:UsersData[]
}

const Rightbar = (props: PropsWithChildren<RightbarProps>) => {
    const { users,profile } = props;
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <Image src={birthdayImage} alt="birthdayImage" />
                    <span className="birthdayText">
                        <b>there foster </b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <Image src={rightbarAd} alt="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {
                        users && users.map((user) => {
                            return <Online key={user.id} user={user} />
                        })
                    }
                </ul>
            </>
        )
    }

    const ProfileRightbar = ()=>{
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Shang Hai</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">                 
                       {
                           profile&&profile.map(item=>{
                               return(
                                <div className="rightbarFollowing">
                                    <div className="rightbarFollowingImg">
                                        <Image src={item.profilePicture} alt="" width={100} height={100} objectFit="cover" />
                                    </div>
                                    <span className="rightbarFollowingName">
                                        {item.username}
                                    </span>
                                </div>
                               )
                           })
                       }
                </div>
            </>
        )
    }
    return (
        <RightbarContainer>
            <div className="rightbarWrapper">
                {
                    users&&<HomeRightbar/>
                }
                {
                    profile&&<ProfileRightbar/>
                }
            </div>
        </RightbarContainer>
    )
}

export default Rightbar;