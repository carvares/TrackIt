import axios from "axios";
import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UserContext"

export default function WeekDays(){
    const days = [{day:"D", id:0},{day:"S",id:1},{day:"T",id:2},{day:"Q",id:3},{day:"Q",id:4},{day:"S",id:5},{day:"S",id:6}]
    const {createHabit, setCreateHabit,userInfo,plus, setPlus,habits,setHabits} = useContext(UserContext);
    const [selected, setSelected] = useState(false)
    const [name,setName] = useState("");

    const[ids,setIds] = useState([]);

    function SelectDay(newid){
        const index = ids.findIndex((element) => element===newid? true:false)

        if(index == -1){
            setIds([...ids,newid])
            
            setSelected(true)
        } else{
            let arr = ids
            arr.splice(index,1);
            setIds(arr)
            setSelected(false);
    }

    }
    function SendHabit(){
    
        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{name:name,days:ids}, {headers:{"Authorization":`Bearer ${userInfo.token}`}})
        promisse.then((r)=>setHabits([...habits,r.data]))
        promisse.catch(r=>console.log(r))
        

    }
    

    return(
        <AddTask>
            <forms>
            <input placeholder="nome do hábito" type="text" value={name} onChange={e => setName(e.target.value)}>
                </input>
                </forms>
                <div>
                
                {days.map(d => {
                    return(
                    <span selected={selected} key={d.id} onClick={()=>SelectDay(d.id)}>{d.day}</span>
                    )
                })}
                </div>
                <Buttons>
                    
                    <Cancel onClick={()=> setPlus(false)}>Cancelar</Cancel>
                    <Save onClick={SendHabit}>Salvar</Save>
                </Buttons>
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