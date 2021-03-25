import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/posts'
//import ForgotPasword from '.components/forgotPasword'
import Login from './components/Login';
import NewAcount from './components/newAcount';
import Views from './components/views';
import ForgotPasword from './components/forgotPasword'
import Postdetail from './components/post-detail'



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { newAcount } from './components/newAcount';
// import signIn from './log-in/sign-in';

export default function RouterApp(props) {
    return (
        <div>
            <Menu />
            <Switch>
                <Route path="/forgot-password">
                    <ForgotPasword></ForgotPasword>
                </Route >
                
                <Route path="/posts" >
                    <div style={{alignItems: "center",justifyContent: "center"}}>
                    <Posts />
                    </div>
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route path="/views">
                    <Views />
                </Route>

                <Route path="/">
                    <table style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      
                    }}><tr style={ {}}>
                            <td style={{backgroundColor: "DarkTurquoise", width:"300px",alignItems: "center",justifyContent: "center"}}><Login></Login>
                            </td>
                            <td style={{backgroundColor: "LightPink", width:"300px"}}><NewAcount></NewAcount>
                            </td>
                        </tr>

                    </table>

                </Route>
            </Switch>

        </div>
    );
}


function Menu() {
    return (
        <nav style={{ textAlign: 'left' }}>
            <ul>

                <Link to="/posts"></Link>
                <br></br>


            </ul>
        </nav>

    );
}


