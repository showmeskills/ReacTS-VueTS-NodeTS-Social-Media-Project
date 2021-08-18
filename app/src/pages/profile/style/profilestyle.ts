import styled from "styled-components";


export const ProfileContainer = styled.div`
    display:flex;
    .profileRight{
        flex:9;
        .profileRightTop{
            .profileCover{
                height:320px;
                position:relative;
                .profileInfoImg{
                   img{
                    width:100%;
                    height:250px;
                    object-fit:cover;
                   }
                }
                .profileCoverImg{
                        img{
                            position:absolute;
                            border-radius:50%;
                            object-fit:cover;
                            margin:auto;
                            left:0;
                            right:0;
                            top:150px;
                            border:3px solid white;
                            width:150px;
                            height:150px;
                        }
                }
            }
            .profileInfo{
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                .profileInfoName{
                    font-size:24px;
                }
                .profileInfoDesc{

                }
            }
        }
        .profileRightBottom{
            display:flex;
        }
    }
`;
