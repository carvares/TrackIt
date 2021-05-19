import reactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './home';
import Signup from './signup';
import Today from './today';
import UserContext from './contexts/UserContext';
import { useState } from 'react';


function App(){
    const [userInfo, setUserInfo] = useState("");

return(
    <>
    <UserContext.Provider value={{userInfo, setUserInfo}}>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/cadastro" exact>
                <Signup/>
            </Route>
            <Route path="/hoje">
                {console.log(userInfo)}
                <Today/>
            </Route>

        </Switch>
    </BrowserRouter>
    </UserContext.Provider>
    </>

)
}


reactDOM.render(<App/>, document.querySelector(".root"));