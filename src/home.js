import axios from 'axios';
import { useState , useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from "./contexts/UserContext"
import Loader from 'react-loader-spinner';
import logo from "./img/logo.png"

export default function Home(){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[input, setInput] = useState(false);
    const history = useHistory();
    const {setUserInfo} = useContext(UserContext);

    function login(event){
        event.preventDefault();
        setInput(true);
        const promisse = axios.post(
        'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
        {email: email, password: password}
        )
        promisse.then((e)=> loginSucess(e))
        promisse.catch(()=> loginFail());
    }
    function loginSucess(request){
        setUserInfo(request.data)
        history.push("/hoje")
    }
    function loginFail(){
        setInput(false);
        alert("login ou senha invalido(s)")
    }
    return(
        <LoginFront input = {input}>
        <img src = {logo} alt="logo"></img>
        <form onSubmit={login}>
        <input type="email" placeholder="email" disabled={input} value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="password" placeholder="senha" disabled={input} value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button disabled={input} type="submit">{input?<Loader type="ThreeDots" color="#ffffff" height={40} width={80}/>:"Entrar"}</button>
        </form>
        <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>

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