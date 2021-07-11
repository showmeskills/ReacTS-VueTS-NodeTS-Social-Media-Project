import Image from "next/image"
import { Search, Person,Chat,Notifications } from "@material-ui/icons"
import { TopbarContainer } from "./style/topbarStyle"
import img from  "@/public/assets/person/2.jpeg";
const Topbar = () => {

    return (
        <TopbarContainer>
        <div className="topbarLeft">
            <span className="logo">Lamasocial</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className="searchIcon"/>
                <input type="text" placeholder="Search for friend, post or video" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">1</span>
                </div>
                <Image src={img} alt=""/>
            </div>
        </div>
    </TopbarContainer>
    )
    
}
export default Topbar;

