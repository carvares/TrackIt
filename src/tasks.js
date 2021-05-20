import axios from "axios";
import { useContext, useEffect, useState } from "react"
import styled from "styled-components";
import UserContext from "./contexts/UserContext";




export default function Tasks(){
    const days = [{day:"D", id:0},{day:"S",id:1},{day:"T",id:2},{day:"Q",id:3},{day:"Q",id:4},{day:"S",id:5},{day:"S",id:6}]
    const {userInfo,habits,setHabits} = useContext(UserContext);
    

    useEffect(()=> {
        const requisition = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{headers:{"Authorization":`Bearer ${userInfo.token}`}})
        requisition.then((r)=>{setHabits(r.data)})
        requisition.catch(()=> console.log("foi n"))
    },[])
    console.log(habits);
    if(habits.length < 1){
        return(
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        )
    } else{
    return(
        <HabitsList>
        {habits.map((i)=>{
            return(
            <Task key={i.id}>
                <h1>{i.name}</h1>
                <img onClick={()=>removeHabit(i.id)} src='/img/trash-outline.svg'></img>
                <div>{days.map((d) => {
                    return(
                        <span>{d.day}</span>
                    )
                })}</div>
            </Task>
            
            )
        })}
        </HabitsList>
    )    
}

    function removeHabit(id){
        const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,{headers:{"Authorization":`Bearer ${userInfo.token}`}})
        promisse.then(attHabits)
    }

    function attHabits(){
        const requisition = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{headers:{"Authorization":`Bearer ${userInfo.token}`}})
        requisition.then((r)=>{setHabits(r.data)})
    }
}

const HabitsList = styled.div`
    padding-bottom:150px;
`

const Task = styled.div`
    width:340px;
    height:91px;
    background-color:#fff;
    margin: 10px auto 10px auto;
    border-radius:5px;
    position:relative;
    z-index:0;
    
    h1{
        font-family:'lexend Deca';
        font-size:20px;
        color:#666;
        padding: 13px 15px 8px 15px;
    }
    div{
        display:flex;
        margin: 0 0 0 15px;
    }
    span{
            width:30px;
            height:30px;
            border: 1px solid #D5D5D5;
            box-sizing: border-box;
            border-radius: 5px;
            margin: 0 4px 0 0;
            background-color:${props => props.selected? "#d5d5d5":"#fff"};
            color:#D5D5D5;
            font-size: 20px;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        img{
            width:15px;
            height:auto;
            position:absolute;
            right:10px;
            top:10px;
        }

`