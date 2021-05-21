import axios from "axios";
import { useContext, useEffect } from "react"
import styled from "styled-components";
import UserContext from "./contexts/UserContext";
import Daybox from "./daybox";




export default function Tasks(){
    
    const {userInfo,habits,setHabits} = useContext(UserContext);
    

    

    useEffect(()=> {
        const requisition = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{headers:{"Authorization":`Bearer ${userInfo.token}`}})
        requisition.then((r)=>{setHabits(r.data)})
        
    },[])

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
                <img onClick={()=>removeHabit(i.id)} src='/img/trash-outline.svg' alt="trash"></img>
                <div>
                    
                   
                        <Daybox ids={null} setIds={null}  days={i.days} />
                        
                </div>
            </Task>
            
            )
        })}
        
        </HabitsList>
    )    
}

    
    

    function removeHabit(id){
        if(window.confirm("você realmente quer apagar esse hábito?")){
        const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,{headers:{"Authorization":`Bearer ${userInfo.token}`}})
        promisse.then(attHabits)
    }
    }

    function attHabits(){
        const requisition = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{headers:{"Authorization":`Bearer ${userInfo.token}`}})
        requisition.then((r)=>{setHabits(r.data)})
    }

}

const HabitsList = styled.div`
    padding-bottom:120px;
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
 
        img{
            width:15px;
            height:auto;
            position:absolute;
            right:10px;
            top:10px;
        }

`