import { Search, Person,Chat,Notifications } from "@material-ui/icons"
import {Link} from "react-router-dom";
import { TopbarContainer } from "./style/topbarStyle"

const Topbar = () => {
    const oneImg = process.env.REACT_APP_PUBLIC_FOLDER +"/person/2.jpeg";
    return (
        <TopbarContainer>
        <div className="topbarLeft">
            <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">Lamasocial</span>
            </Link>
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
                <img src={oneImg} alt=""/>
            </div>
        </div>
    </TopbarContainer>
    )
    
}
export default Topbar;

