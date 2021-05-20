import styled from "styled-components"
import { useContext, useState } from "react";
import UserContext from "./contexts/UserContext";
import WeekDays from "./styles/weekdays";
import Tasks from "./tasks";
import Topbar from "./topbar";
import Bottombar from "./bottombar";

export default function Habits(){
    const{userInfo,plus, setPlus} = useContext(UserContext);



    function NewTask(props){
        if(plus){


        return(
            <>
                <WeekDays/>
                

            </>
        )} else {
            return(
                <>
                </>
            )

        }
    }


    return(
        <>
        <Topbar/>
        <Container>
            <Tittle><h1>Meus hábitos</h1> <span onClick={()=>plus?setPlus(false):setPlus(true)}>+</span></Tittle>
            <NewTask setPlus={setPlus}/>
            
            <Tasks/>
            <Bottombar/>
        </Container>
        
        </>
    )
}








const Container = styled.div`
    width:375px;
    min-height:100vh;
    background-color:#f2f2f2;
    font-family:'Lexend Deca';
        p{
            font-size:18px;
            color:#666;
            width:338px;
            height:74px;
            margin: 25px auto 0 auto;
        }

    

    `

    const Tittle = styled.div`
        padding-top:85px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin: 0 18px 0 18px;
        & > span{
            width:40px;
            height: 35px;
            font-size:30px;
            font-weight:bold;
            background-color:#52b6ff;
            color:#fff;
            border-radius: 5px;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        h1{
            
            font-size:23px;
            color:#126BA5;
        }
        
        `

    
