import { useContext } from "react"
import styled from "styled-components"
import UserContext from "./contexts/UserContext"



export default function Topbar(){
    const {userInfo} = useContext(UserContext);
    return(
        <Upbar>
            <h1>TrackIt</h1>
            <img src={userInfo.image}></img>
        </Upbar>
    )
}



const Upbar = styled.div`
    position:fixed;
    z-index:1;
    top:0;
    left:0;
    width:375px;
    height:70px;
    background-color:#126BA5;
    display:flex;
    justify-content: space-between;
    align-items:center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    h1{
        font-family:'playball';
        font-size:39px;
        color:#fff;
    }
    h1, img{
        margin: 0 18px 0 18px;
    }
    img{
        width:51px;
        height:51px;
        border-radius:100px;
        object-fit:cover;
    }
`