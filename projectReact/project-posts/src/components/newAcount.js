import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";


import { connect } from 'react-redux';
import { userAction } from '../redux/actions/userAction'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect, withRouter
} from "react-router-dom";

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    };
}
const mapDispatchToProps = (dispatch) => ({
    setName: (Name) => dispatch(userAction.setName(Name)),
    setPassword: (password) => dispatch(userAction.setPassword(password)),
    setEmail: (email) => dispatch(userAction.setEmail(email)),
    setIdUser: (idUser) => dispatch(userAction.setIdUser(idUser)),
    setPhone: (Phon) => dispatch(userAction.setPhone(Phon)),
    //id from mongo
    setId: (id) => dispatch(userAction.setId(id)),
    setUser:(user) => dispatch(userAction.setUser(user)),
    addUser: (user) => dispatch(userAction.addUser(user)),

    // addUser: (user) => dispatch(userAction.addUser(user)),

})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function NewAcount(props) {
    const { history ,addUser} = props;

    const [phone, setPhone] = useState("");
    const [name, setName] = useState('')
    const [userId, setUserId] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");

    function addUser1(user) {
        var myHeaders = new Headers()
        myHeaders.append("content-Type", "application/json")

        var raw = JSON.stringify({ "name": name, "idUser": userId, "email": email, "password": password, "phon": phone })
        //console.log(raw)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:4200/createUser", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log("result"+result)
                let resultnewUser = JSON.parse(result)
                //setId(resultnewUser.user._id)
                addUser(resultnewUser)

                enter(resultnewUser.newUser.name)

                //let jwt = resultnewUser.jwt;
            })
            .catch(error => {
                console.log('error', error)
                alert(`sorry!${name} we have problem ,try again later!`)
            });
    }
    function enter(name) {
        debugger
        // setTimeout(() => {
        //     alert(`hello ${name}`);
        // }, 1000);

        history.push('/posts');
    }
    function validateForm() {
        return (email !== "" && password !== "" && phone !== "" && name !== "" && userId !== "")
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <h1 style={{color: "Grey"}}>New Account</h1>

            <Form.Group size="lg" controlId="password" >
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
            <br></br>
            <Form.Group size="lg" controlId="email">
                <Form.Label>Name</Form.Label>
                <Form.Control style={{
                       
                        justifyContent: "center",
                        alignItems: "center"
                        
                    }}
                    autoFocus
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <br></br>
            <Form.Group size="lg" controlId="email">
                <Form.Label>Phon</Form.Label>
                <Form.Control style={{
                        
                        justifyContent: "center",
                        alignItems: "center"
                        
                    }}
                    autoFocus
                    type="phon"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </Form.Group>
            <br></br>
            <Form.Group size="lg" controlId="email">
                <Form.Label>Id</Form.Label>
                <Form.Control style={{
                       
                        justifyContent: "center",
                        alignItems: "center"
                        
                    }}
                    autoFocus
                    type="id"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
            </Form.Group>
            <br></br>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control style={{
                        
                        justifyContent: "center",
                        alignItems: "center"
                        
                    }}
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Button block size="lg" onClick={addUser1} type="submit" disabled={!validateForm()} style={{background: "LightGrey"}}>
                    Submit
        </Button>
            </Form>
        </div>
    );
}))