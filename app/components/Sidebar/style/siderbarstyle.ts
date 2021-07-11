import styled from "styled-components";


export const SiderbarContainer = styled.div`
    flex:3;
    height:calc(100vh - 50px);
    overflow-y:scroll;
    position:sticky;
    top:50px;
    ::-webkit-scrollbar{
        width:5px;
    }
    ::-webkit-scrollbar-track{
       background-color:#f1f1f1;
    }
    ::-webkit-scrollbar-thumb{
        background-color:rgb(175,175,175);
    }
    .siderbarWrapper{
        padding:20px;
        .sidebarList{
            padding:0;
            margin:0;
            list-style:none;
            .siderbarListItem{
                display:flex;
                align-items:center;
                margin-bottom:20px;
                .sidebarIcon{
                    margin-right:50px;
                }
                .siderbarListItemText{

                }
            }
        }
        .sidebarButton{
            width:150px;
            border:none;
            padding:10px;
            border-radius:50px;
            font-weight:bold;
        }
        .sidebarHr{
            margin:20px 0;
        }
        .sidebarFriendList{
            padding:0;
            margin:0;
            list-style:none;
        }
        .sidebarFriend{
            display:flex;
            align-items:center;
            margin-bottom:15px;
            img{
                width:32px;
                height:32px;
                border-radius:50%;
                object-fix:cover;
                margin-right:10px;
            }
            .sidebarFriendName{

            }
        }
    }
`;



