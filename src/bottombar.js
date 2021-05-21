import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components"
import {Link} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from './contexts/UserContext';


export default function Bottombar(){
    const {todayHabits, setHabitsDone, porcentage, setPorcentage} = useContext(UserContext);
    let filtred = todayHabits.filter(elem => elem.done)
    setPorcentage(todayHabits.length >=0? (filtred.length/todayHabits.length) * 100: 0)
    
    useEffect(()=>{
   
    if(porcentage > 0){
    setHabitsDone(Math.round(porcentage))
    } else{
        setHabitsDone(0)
    }
},[])
      
     

    

    
    return(
        <Downbar>
        <Link to="/habitos"><div>Hábitos</div></Link>
        <Link to="/hoje"><Circle><CircularProgressbar
                value={porcentage}
                text = "hoje"
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor:"#fff",
                    trailColor:"transparent"

                })}/>
                </Circle></Link>
        <Link to="/historico"><div>Histórico</div></Link>
        </Downbar>
    )
}


const Downbar = styled.div`
    position:fixed;
    z-index:1;
    bottom:0;
    left:0;
    width:100%;
    height:70px;
    background-color:#fff;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    a{
        text-decoration: none;
    }
    div{
        font-family:'Lexend Deca';
        font-size:18px;
        width:80px;
        height: 50px;
        display:flex;
        justify-content:center;
        align-items:center;
        color:#52b6ff;
        
    }
    `
const Circle = styled.div`
padding-bottom:50px;
`