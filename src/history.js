import Topbar from './topbar'
import Bottombar from './bottombar'
import styled from 'styled-components'


export default function History(){

    return(
        <>
        <Topbar/>
        <Container>
            <Tittle>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Tittle>
        </Container>
        <Bottombar/>
        </>
    )
}

const Container = styled.div`
     width:100%;
    min-height:100vh;
    background-color:#f2f2f2;
    font-family:'Lexend Deca';
     
`
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