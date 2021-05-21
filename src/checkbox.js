import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import UserContext from "./contexts/UserContext"

export default function Checkbox({id, done} ){
    const {userInfo,setHabitsDone,setTodayHabits,habitsDone ,todayHabits} = useContext(UserContext);


    function check(){
        if(done){
        const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,null,{headers:{"Authorization":`Bearer ${userInfo.token}`}})
        promisse.then(()=>attList())
        } else{
        const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,null,{headers:{"Authorization":`Bearer ${userInfo.token}`}})
        promisse.then(()=> attList());
        }
    }
    function attList(){
        
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',{headers:{"Authorization":`Bearer ${userInfo.token}`}})
        promisse.then((r)=> setTodayHabits(r.data))
    }
    return(
        <Box  done={done} onClick={check}><img src="/img/Vector.png" alt="checkbox"></img></Box>
    )
}

const Box = styled.span`
    width:69px;
    height:69px;
    margin-right:13px;
    background-color:${props=>props.done?"#8FC549":"#e7e7e7"};
    display:flex;
    justify-content:center;
    align-items:center;
    `