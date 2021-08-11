import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import logo from "./img/logo.png"
export default function Signup(){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[name, setName] = useState("");
    const[image, setImage] = useState("");
    const history = useHistory();
    const [input,setInput] = useState(false);

    function newAccount(event){
        event.preventDefault();

        setInput(true);
        const requisition = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', 
        {email: email, name: name , image: image, password: password})
        requisition.then(()=> history.push("/"))
        requisition.catch(signupFail)
    }
    function signupFail(){
        alert("Dados inválidos")
        setInput(false);
    }
    
    
    return(
        <LoginFront input={input}>
        <img src = {logo} alt="logo"></img>
        <form onSubmit={newAccount}>
        <input type="email" placeholder="email" disabled={input} value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="password" placeholder="senha" disabled={input} value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <input type="text" placeholder="nome" disabled={input} value={name} onChange={(e)=>setName(e.target.value)}></input>
        <input type="url" placeholder="foto" disabled={input} value={image} onChange={(e)=>setImage(e.target.value)}></input>
        <button type="submit">{input?<Loader type="ThreeDots" color="#ffffff" height={40} width={80}/>:"Cadastrar"}</button>
        </form>
        <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>

        </LoginFront>
    )
}

const LoginFront = styled.div`
    font-family: 'Lexend Deca';
    width: 303px;
    display:flex;
    flex-direction: column;
    align-items:center;
    margin: 68px auto 0 auto;
    img{
        width:180px;
        height:auto;
        margin: 0 0 30px 0;

    }
    input{
        width:303px;
        height:45px;
        border:1px solid #d5d5d5;
        border-radius: 5px;
        font-size: 20px;
        margin: 6px 0 6px 0;
    }
    button{
        width:303px;
        height:45px;
        background-color:#52b6ff;
        color:#fff;
        border-radius:5px;
        font-size:21px;
        border:none;
        margin:0 0 19px 0; 
        opacity: ${props => props.input? "0.7":"1"};
        

    }
    p{
        font-size:14px;
        color:#52b6ff;
        text-decoration:underline;
    }
    `
