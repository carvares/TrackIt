import { useState } from "react";
import styled from "styled-components";



export default function Daybox({ids,setIds,days}){
    const weekdays = [{name:"D", id:0 ,status:false},{name:"S",id:1 ,status:false},{name:"T",id:2 ,status:false},{name:"Q",id:3 ,status:false},{name:"Q",id:4 ,status:false},{name:"S",id:5 ,status:false},{name:"S",id:6 ,status:false}]
   
    if(ids ===null  && setIds === null){
    weekdays.forEach(element => {
       if(days.includes(element.id)){
            element.status = true;
            console.log("entrou")
       }
    

   });}

    const [selected, setSelected] = useState(false)
    
    
    
    function SelectDay(newid){
        const index = ids.findIndex((element) => element===newid? true:false)

        if(index === -1){
            setIds([...ids,newid])
            
            setSelected(true)
        } else{
            let arr = ids
            arr.splice(index,1);
            setIds(arr)
            setSelected(false);
    }
    }
    
    if(ids === null && setIds === null ){
        console.log(weekdays.status);


        
        return(
            <>
            {weekdays.map((day)=>
            ( <Box selected={day.status}> {day.name} </Box> )
            )}
            </>
            
        ) 
    } else{

    return(

            <Box selected={selected}  onClick={()=>SelectDay(days.id)}> {days.name} </Box>

    )
    }

}

const Box = styled.span`
    width:30px;
    height:30px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 0 4px 0 0;
    background-color:${props => props.selected? "#d5d5d5":"#fff"};
    color:${props=> props.selected?"#fff":"#D5D5D5"};
    font-size: 20px;
    display:flex;
    justify-content:center;
    align-items:center;`




