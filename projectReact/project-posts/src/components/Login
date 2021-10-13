import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
// import { response } from "express";
// import e from 'express'
import Posts from './posts'
import axios from 'axios';
import ForgotPasword from './forgotPasword'
import { connect } from 'react-redux';
import { userAction } from '../redux/actions/userAction'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect, withRouter
} from "react-router-dom";
import { postAction } from "../redux/actions/postAction";

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        Name: state.userReducer.user.Name,
    };
}
const mapDispatchToProps = (dispatch) => ({
    setName: (Name) => dispatch(userAction.setName(Name)),
    setPassword: (password) => dispatch(userAction.setPassword(password)),
    setEmail: (email) => dispatch(userAction.setEmail(email)),
    addUser: (user) => dispatch(userAction.addUser(user)),
    setPosts: (listPosts) => dispatch(postAction.setPosts(listPosts)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Login(props) {
    const { addUser, history, setPosts } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    function loginUser() {
        console.log("login");

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        console.log(password);
        console.log(email);
        fetch(`http://localhost:4200/getUserById/${password}/${email}`, requestOptions)

            .then(response => response.text())
            .then(result => {
                console.log(result)
                let resultuser = JSON.parse(result)
                if (resultuser.massege == 'no user')
                    alert(`sorry! ${password} is not corect enter again`)
                else {
                    addUser(resultuser.user)
                    console.log(resultuser);
                    console.log(resultuser.user.posts);
                    setPosts(resultuser.user.posts)
                    enter(resultuser.user.name)
                }
            })
            .catch(error => console.log('error', error + 'iiiiiiiiiiiiiiiiii'));
    }
    function enter(name) {

        // setTimeout(() => {
        //     alert(`hello ${name}`);
        // }, 2000);

        history.push('/posts');
    }
    return (
        <div className="Login" >


            <h1 style={{color: "Grey"}}>Login</h1>
            <Form onSubmit={handleSubmit} style={{}} >
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control style={{
                        justifyContent: "center",
                        alignItems: "center",
                        
                        
                    }}
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <br></br>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{
                        
                        justifyContent: "center",
                        alignItems: "center"
                        
                    }}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" onClick={loginUser} disabled={!validateForm()} style={{background: "LightGrey"}} >
                    Login
                </Button>
                {/* <button onClick={loginUser}> iii</button> */}
            </Form>

            <Link to="/forgot-password" >forgot-password</Link>
        </div>
    );
}))

