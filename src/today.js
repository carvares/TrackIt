import styled from "styled-components"
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext, useState } from "react";
import UserContext from "./contexts/UserContext";

export default function Today(){
    const{userInfo} = useContext(UserContext)
    const[plus, setPlus] = useState(false);


    function NewTask(){
        if(plus){


        return(
            <>
            <AddTask>
                <input placeholder="nome do hábito" type="text">
                </input>
                <div>
                <span>D</span>
                <span>S</span>
                <span>T</span>
                <span>Q</span>
                <span>Q</span>
                <span>S</span>
                <span>S</span>
                </div>
                <Buttons>
                    <Cancel>Cancelar</Cancel>
                    <Save>Salvar</Save>
                </Buttons>
            </AddTask>
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
        <Topbar>
            <h1>TrackIt</h1>
            <img src={userInfo.image}></img>
        </Topbar>
        <Container>
            <Tittle><h1>Meus hábitos</h1> <span onClick={()=>plus?setPlus(false):setPlus(true)}>+</span></Tittle>
            <NewTask/>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            
        </Container>
        <Bottombar>
        <div>Hábitos</div>
        <Circle><CircularProgressbar
                value={50}
                text = "hoje"
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor:"#fff",
                    trailColor:"transparent"

                })}/>
                </Circle>
        <div>Histórico</div>
        </Bottombar>
        </>
    )
}





const Topbar = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:375px;
    height:70px;
    background-color:#126BA5;
    display:flex;
    justify-content: space-between;
    align-items:center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    h1{
        font-family:'playball';
        font-size:39px;
        color:#fff;
    }
    h1, img{
        margin: 0 18px 0 18px;
    }
    img{
        width:51px;
        height:51px;
        border-radius:100px;
    }
`
const Bottombar = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    width:375px;
    height:70px;
    background-color:#fff;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
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
const Container = styled.div`
    width:375px;
    height:100vh;
    background-color:#f2f2f2;
    font-family:'Lexend Deca';

    
        
        h1{
            
            font-size:23px;
            color:#126BA5;
        }
        span{
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
        h1, span{
            margin: 0 18px 0 18px;
        }
        
        
    }
    

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
        `

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
        span{
            width:30px;
            height:30px;
            border: 1px solid #D5D5D5;
            box-sizing: border-box;
            border-radius: 5px;
            margin: 0 4px 0 0;
            background-color:#fff;
            color:#D5D5D5;
            font-size: 20px;
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
