import styled from "styled-components";


export const Spin = styled.div`
    @keyframes cycle {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    z-index: 999;
    background-color:rgba(0,0,0,.3);
    .log {
        width: 50px;
        height: 50px;
        position: absolute;
        top:50%;
        left:50%;
        transform:translateX(-50%);
        transform:translateY(-50%);
        border-radius: 50%;
        border: 5px solid black;
        border-right: transparent 5px solid;
        animation: cycle 0.5s linear infinite;
    }
`