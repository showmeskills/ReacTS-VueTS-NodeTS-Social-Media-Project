import {
    RssFeed,
    Chat,
    Group,
    Bookmarks,
    HelpOutline,
    Work,
    Event,
    School
} from "@material-ui/icons";
import {PropsWithChildren} from "react";
import { SiderbarContainer } from "./style/siderbarstyle";
import CloseFriend from "./CloseFriend";
import {UsersData} from "@/mock/typings";
interface DataList {
    id: number;
    title: string;
    icon: any;
}

const dataList: DataList[] = [
    {
        id: 0,
        title: "Feed",
        icon: <RssFeed className="sidebarIcon" />
    },
    {
        id: 1,
        title: "Chats",
        icon: <Chat className="sidebarIcon" />
    },
    {
        id: 2,
        title: "Groups",
        icon: <Group className="sidebarIcon" />
    },
    {
        id: 3,
        title: "Bookmarks",
        icon: <Bookmarks className="sidebarIcon" />
    },
    {
        id: 4,
        title: "Questions",
        icon: <HelpOutline className="sidebarIcon" />
    },
    {
        id: 5,
        title: "Jobs",
        icon: <Work className="sidebarIcon" />
    },
    {
        id: 6,
        title: "Events",
        icon: <Event className="sidebarIcon" />
    },
    {
        id: 7,
        title: "Courses",
        icon: <School className="sidebarIcon" />
    },
]

interface SiderbarProps{
    users?:UsersData[]
}



const Siderbar = (props:PropsWithChildren<SiderbarProps>) => {
    const {users} = props;
    return (
        <SiderbarContainer>
            <div className="siderbarWrapper">
                <ul className="sidebarList">
                    {
                        dataList.map(item => {
                            return (
                                <li
                                    key={item.id}
                                    className="siderbarListItem"
                                >
                                    {item.icon}
                                    <span className="siderbarListItemText">{item.title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {
                        users&&users.map(user =>{
                            return <CloseFriend key={user.id} user={user}/>
                        })
                    }
                </ul>
            </div>
        </SiderbarContainer>
    )
}




export default Siderbar;