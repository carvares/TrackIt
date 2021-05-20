import reactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './home';
import Signup from './signup';
import Habits from './habits';
import UserContext from './contexts/UserContext';
import { useState } from 'react';
import Today from './today'


function App(){
    const [userInfo, setUserInfo] = useState("");
    const [createHabit, setCreateHabit] = useState("");
    const[habits,setHabits] = useState([]);
    const [plus, setPlus] = useState(false)

return(
    <>
    <UserContext.Provider value={{userInfo, setUserInfo,createHabit,setCreateHabit, plus, setPlus,habits,setHabits}}>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/cadastro" exact>
                <Signup/>
            </Route>
            <Route path="/habitos">
                <Habits/>
            </Route>
            <Route path="/hoje">
                <Today/>
            </Route>

        </Switch>
    </BrowserRouter>
    </UserContext.Provider>
    </>

)
}


reactDOM.render(<App/>, document.querySelector(".root"));