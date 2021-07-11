import styled from "styled-components";

export const RightbarContainer = styled.div`
    flex:3.5;
    .rightbarWrapper{
        padding:20px 20px 0 0;
        .rightbarTitle{
            font-size:18px;
            font-weight:500;
            margin-bottom:10px;
        }
        .rightbarInfo{
            margin-bottom:30px;
            .rightbarInfoItem{
                margin-bottom:10px;
                .rightbarInfoKey{
                    font-weight:500;
                    margin-right:15px;
                    color:#555;
                }
                .rightbarInfoValue{
                    font-weight:300;
                }
            }
        }
        .rightbarFollowings{
            display:flex;
            flex-wrap:wrap;
            justify-content:space-between;
            .rightbarFollowing{
                width: 24%;
                display:flex;
                flex-direction:column;
                margin-bottom:20px;
                cursor:pointer;
                align-items:center;
                &:last-child:nth-child(4n - 2) {
                    margin-right: calc(48% + 8% / 3);
                }
                &:last-child:nth-child(4n - 1) {
                    margin-right: calc(24% + 4% / 3);
                }
                .rightbarFollowingImg{
                    width:100px;
                    height:100px;
                    object-fit:cover;
                    border-radius:5px;
                }
            }
        }
        .birthdayContainer{
            display:flex;
            align-items:center;
            img{
                width:40px;
                height:40px;
                margin-right:10px;
            }
            .birthdayText{
                font-weight:300;
                font-size:15px;
            }
        }
        img:nth-child(2){
            width:100%;
            border-radius:10px;
            margin:30px 0;
        }
        .rightbarTitle{
            margin-bottom:20px;
        }
        .rightbarFriendList{
            padding:0;
            margin:0;
            list-style:none;
            .rightbarFriend{
                display:flex;
                align-items:center;
                margin-bottom:15px;
                .rightbarProfileImgContainer{
                    margin-left:10px;
                    position:relative;
                    img{
                        width:40px;
                        height:40px;
                        border-radius:50%;
                        object-fit:cover;
                    }   
                    .rightbarOnline{
                        width:12px;
                        height:12px;
                        border-radius:50%;
                        background-color:limegreen;
                        position:absolute;
                        top:-2px;
                        right:0;
                        border:2px solid white;
                    }
                }
                .rightbarUsername{
                    font-weight:500;
                }
            }
        }
    }
`;