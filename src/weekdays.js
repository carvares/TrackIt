import axios from "axios";
import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "./contexts/UserContext"
import Daybox from "./daybox";

export default function WeekDays(){
    const days = [{name:"D", id:0},{name:"S",id:1},{name:"T",id:2},{name:"Q",id:3},{name:"Q",id:4},{name:"S",id:5},{name:"S",id:6}]
    const {createHabit, setCreateHabit,userInfo,plus, setPlus,habits,setHabits} = useContext(UserContext);
   
    const [name,setName] = useState("");

    const[ids,setIds] = useState([]);

    

    
    function SendHabit(event){
        event.preventDefault();
    
        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{name:name,days:ids}, {headers:{"Authorization":`Bearer ${userInfo.token}`}})
        promisse.then((r)=>setHabits([...habits,r.data]))
        promisse.catch(r=>console.log(r))
        

    }
    

    return(
        <AddTask>
            <form onSubmit={SendHabit}>
            <input placeholder="nome do hábito" type="text" value={name} onChange={e => setName(e.target.value)}>
                </input>
                
                <div>
                
                {days.map(d => {
                    return(
                    <Daybox  ids={ids} setIds={setIds} days={d} high ={null}/>
                    )
                })}
                </div>
                <Buttons>
                    
                    <Cancel onClick={()=> setPlus(false)}>Cancelar</Cancel>
                    <Save type="submit" >Salvar</Save>
                    
                </Buttons>
                </form>
                </AddTask>
    )
}



const AddTask = styled.div`
        width:340px;
        height:180px;
        background-color:#fff;
        margin: 0 auto 0 auto;
        border-radius:5px;
        margin: 20px 0 0 18px;
        div{
            display:flex;
            margin: 0 0 0 18px;
        }
        
        input{
            width:303px;
            height:45px;
            border: 1px solid #D5D5D5;
            border-radius:5px;
            margin: 18px 18px 8px 18px;
        }
        

    `
    const Buttons = styled.div`
        width:303px;
        margin: 10px 0 0 85px;
    `
    const Cancel = styled.button`
        width:84px;
        height:35px;
        background-color:#fff;
        margin:20px 5px 0 130px;
        background-color:#fff;
        font-size:16px;
        color:#52b6ff;
        border:none;
        border-radius:5px;
    `
    const Save = styled.button`
        width:84px;
        height:35px;
        background-color:#fff;
        margin: 20px 0;
        background-color: #52b6ff;
        font-size:16px;
        color:#fff;
        border:none;
        border-radius:5px;


    `