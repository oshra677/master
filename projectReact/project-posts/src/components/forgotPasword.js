
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
// import { response } from "express";
// import e from 'express'


import { connect } from 'react-redux';
import { userAction } from '../redux/actions/userAction'

import {
    Link,
    Redirect, withRouter
} from "react-router-dom";

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        Name: state.userReducer.user.Name,
    };
}
const mapDispatchToProps = (dispatch) => ({
    setUserId: (userId) => dispatch(userAction.setUserId(userId)),
    setPassword: (password) => dispatch(userAction.setPassword(password)),
    setEmail: (email) => dispatch(userAction.setEmail(email)),
    addUser: (user) => dispatch(userAction.addUser(user)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function ForgotPasword(props) {
    const {history, addUser} = props;
    // debugger
     const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [userId, setUserId] = useState("");

    // var password1 = '';
    // var email1 = '';

    function validateForm() {

        return email.length > 0 && userId.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    function loginUser() {
        // var myHeaders = new Headers()
        // myHeaders.append("content-Type", "application/json")

        // var raw = JSON.stringify({ "name": name, "idUser": userId, "email": email, "password": password, "phon": phone })
        // //console.log(raw)
        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        //var raw = JSON.stringify({})
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
         //   body: raw,
            redirect: 'follow'
        };
//pass 45244517 , userIzd 1722179718, email chayaCanary@gmail.com
        fetch(`http://localhost:4200/updatePassword/${email}/${userId}/${password}`, requestOptions)
        
            .then(response => response.text())
            .then(result => {
                console.log("רקדוךא"+result)
                debugger
                let resultuser = JSON.parse(result)
                if (resultuser.massage == "update dosnt sucsess")
                    alert(`sorry!  ${userId} or ${email} is not corect enter again`)
                else {
                    console.log(resultuser.updateUser.value)
                    addUser(resultuser.updateUser.value)
                    enter(resultuser.updateUser.value.name)

                }
            })

            .catch(error => console.log('error', error));
    }
    function enter(name) {
        debugger
        setTimeout(() => {
            alert(`hello ${name} ${password} your pasword plisse memmber`);
        }, 2000);

        history.push('/posts');
    }
    return (
        <div className="Login">

            <p>Login</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                        type="id"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label> enter new Password:</Form.Label>
                    <Form.Control
                        type="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" onClick={loginUser} disabled={!validateForm()}>
                    Login
                </Button>
                {/* <button onClick={loginUser}> iii</button> */}
            </Form>
        </div>
    );
}))














// import { userAction } from '../redux/actions/userAction'

// import React from 'react';
// import { connect } from 'react-redux';

// import {
//     Link,
//     Redirect, withRouter
// } from "react-router-dom";

// function mapStateToProps(state) {
//     return {
//         user:
//      state.userReducer.user,
//         Name: state.userReducer.user.Name,

//     };
// }
// const mapDispatchToProps = (dispatch) => ({
//     setNameUser: (Name) => dispatch(userAction.setNameUser(Name)),
//     setIdUser: (idUser) => dispatch(userAction.setIdUser(idUser)),
//     setPassword: (password) => dispatch(userAction.setPassword(password)),
   
//     addUser: (user) => dispatch(userAction.addUser(user)),

// })

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Login(props) {
//     debugger
//     const { Name, setNameUser, history,setPassword } = props;

//     // if (!Name) {
//     //     return <Redirect to={{ pathname: '/', state: { flash: 'Please select a user name first' } }} />
//     // }



//     function enter() {
//         debugger
//         setTimeout(() => {
//             alert("waiting 5 seconds");
//         }, 5000);

//         history.push('/search');

//     }
//     return (
//         <div>
//             <p>Hello {Name}</p>
//             <label>
//                 please select a user name:
//                 <input type="text"
//                     onChange={(e) => setNameUser(e.target.value)}>

//                 </input>
//                 <input type="text"
//                     onChange={(e) => setIdUser(e.target.value)}>

//                 </input>
//                 <input type="text"
//                     onChange={(e) => setPassword(e.target.value)}>

//                 </input>
//                 <Link to="/posts" onClick={enter}>Enter</Link>
                
//             </label>
//         </div>
//     );
// }))

