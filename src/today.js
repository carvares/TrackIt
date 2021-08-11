import axios from "axios";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import Bottombar from "./bottombar";
import Checkbox from "./checkbox";
import UserContext from "./contexts/UserContext";
import Topbar from "./topbar";


export default function Today(){
    const {userInfo, setTodayHabits, todayHabits,porcentage} = useContext(UserContext);
    
    useEffect(()=>{
      const promisse =  axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',{headers:{"Authorization":`Bearer ${userInfo.token}`}})
      promisse.then(r => setTodayHabits(r.data))
    },[])

    
    
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
        <Tittle porcentage={porcentage}>
            <h1>{now.format("dddd, D/MM" )}</h1>
            <p >{porcentage > 0? `${Math.round(porcentage)}% dos hábitos concluídos`:"Nenhum hábito concluido ainda"}</p>
        </Tittle>
        {todayHabits.map((i)=>{
            return(
            <TodayTask key={i.id}  >
                <div>
                <h1>{i.name}</h1>
                <p>Sequência atual:<Current ok={i.done}>{i.currentSequence}</Current> dias </p>
                <p>Seu recorde:<Record ok={i.done} record = {()=> i.highestSequence === i.currentSequence? true:false}>{i.highestSequence}</Record> dias </p>
                </div>
                <Checkbox key = {i.id} id={i.id} done={i.done}/>
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
        &>p{
            font-size:18px;
            color:${props => props.porcentage > 0?"#8FC549":"#bababa"};
            padding-bottom: 28px;
            
        }


`
const TodayTask = styled.div`
    width: 340px;
    height:94px;
    background-color:#fff;
    border-radius:5px;
    margin: 0 auto 10px auto;
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
const Current = styled.span`
    font-size:13px;
                 color:${props => props.ok?"#8FC549":"#bababa"};
                 padding-bottom:4px;
`
const Record = styled.span`
    font-size:13px;
                 color:${props => props.record && props.ok?"#8FC549":"#bababa"};
                 padding-bottom:4px;
`


const Container = styled.div`
    width:100%;
    min-height:100vh;
    background-color:#f2f2f2;
    font-family:'Lexend Deca';
    padding-bottom: 120px;

    

    `
