import styled from "styled-components";

export const ShareContainer = styled.div`
    width:100%;
    height:170px;
    border-radius:10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68); 
    box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
    .shareWrapper{
        padding:10px;
        .shareTop{
            display:flex;

            img{
                width:50px;
                height:50px;
                border-radius:50%;
                object-fit:cover;
                margin-right:10px;
            }
            .shareInput{
                border:none;
                width:80%;
                &:focus{
                    outline:none;
                }
            }
        }
        .shareHr{
            margin:20px;
        }
        .shareBottom{
            display:flex;
            align-items:center;
            justify-content:space-between;
            .shareOptions{
                display:flex;
                margin-left:12px;
                .shareOption{
                    display:flex;
                    align-items:center;
                    margin-left:15px;
                    cursor:pointer;
                    .shareIcon{
                        font-size:18px;
                        margin-right:3px;
                    }
                    .shareOptionText{
                        font-size:14px;
                        font-weight:500;
                    }
                }
            }
            .shareButton{
                border:none;
                padding:7px;
                border-radius:5px;
                background-color:green;
                font-weight:500;
                margin-right:20px;
                cursor:pointer;
                color:white;
            }
        }
    }

`;
