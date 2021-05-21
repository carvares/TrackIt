import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Bottombar from "./bottombar";
import Checkbox from "./checkbox";
import UserContext from "./contexts/UserContext";
import Topbar from "./topbar";


export default function Today(){
    const {userInfo, setTodayHabits, todayHabits} = useContext(UserContext);
    
    useEffect(()=>{
      const promisse =  axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',{headers:{"Authorization":`Bearer ${userInfo.token}`}})
      promisse.then(r => setTodayHabits(r.data))
    },[])
    console.log(todayHabits);
    
    
    var dayjs = require('dayjs');
    let now = dayjs();
    var updateLocale = require('dayjs/plugin/updateLocale');
    dayjs.extend(updateLocale);
    dayjs.updateLocale('en', {
    weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
});
    

    return(
        <>
        <Topbar/>
        <Container>
        <Tittle>
            <h1>{now.format("dddd, D/MM" )}</h1>
            <p>Nenhum hábito concluido ainda</p>
        </Tittle>
        {todayHabits.map((i)=>{
            return(
            <TodayTask>
                <div>
                <h1>{i.name}</h1>
                <p>Sequência atual:{i.currentSequence} dias </p>
                <p>Seu recorde:{i.highestSequence} dias </p>
                </div>
                <Checkbox id={i.id} done={i.done} setTodayHabits={setTodayHabits}/>
            </TodayTask>
            )
        })}
            
        <Bottombar/>
        </Container>
        </>
    )
}

const Tittle = styled.div`
    padding: 90px 0 0 17px;
    font-family:'Lexend Deca';


        h1{
            
            font-size:23px;
            color:#126BA5;
            padding-bottom:5px;
        }
        p{
            font-size:18px;
            color:#bababa;
            padding-bottom: 28px;
        }

`
const TodayTask = styled.div`
    width: 340px;
    height:94px;
    background-color:#fff;
    border-radius:5px;
    margin: 0 18px 10px 18px;
    font-family:'Lexend Deca';
    display:flex;
    justify-content:space-between;
    align-items:center;
       div{
           padding: 5px 0 0 13px;
           
        h1{
            font-size:20px;
            color:#666;
            padding-bottom:10px;
    }
        p{
            font-size:13px;
            color:#666;
            padding-bottom:4px;
        }
       }
       

`
const Container = styled.div`
    width:100%;
    min-height:100vh;
    background-color:#f2f2f2;
    font-family:'Lexend Deca';
     

    

    `
