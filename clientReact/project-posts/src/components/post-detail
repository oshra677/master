
import React, { component } from 'react'
import { setState, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { postAction } from '../redux/actions/postAction'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect, withRouter
} from "react-router-dom";
import { userAction } from '../redux/actions/userAction'
export function SelectableList(props) {
  const { items } = props;
  const [selectedItems, setSelectedItems] = useState([]);
}
function mapStateToProps(state) {
  return {
    post: state.postReducer.post,
    listPosts: state.postReducer.listPosts,
    user: state.userReducer.user
  };
}
const mapDispatchToProps = (dispatch) => ({
  setoneTitel: (title) => dispatch(postAction.setoneTitel(title)),
  setoneBody: (body) => dispatch(postAction.setoneBody(body)),
  //set_Id: (_id) => dispatch(userAction.setUserId(_id)),

  addPost: (listPosts) => dispatch(postAction.addPost(listPosts)),


})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Postdetail(props) {
  debugger
  const { setShow } = props
  const { addPost, setposts, user } = props;
  const [title, setoneTitel] = useState("");
  const [body, setoneBody] = useState("");
  //  const [id,setId ] = useState("");
  function AddPost() {
    var myHeaders = new Headers()
    myHeaders.append("content-Type", "application/json")
    var raw = JSON.stringify({ "title": title, "body": body, "userId": user._id })
    console.log(raw)

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("http://localhost:4200/createPost", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        let resultnewPost = JSON.parse(result)
        console.log(resultnewPost.newPost);
        addPost(resultnewPost.newPost)
        setShow(false)
        //save(resultnewPost.post.titel)
        //addPost(resultnewPost.post)
        //let jwt = resultnewUser.jwt;
      })

      .catch(error => {
        console.log('error', error)
        alert(`sorry!${title} we have problem ,try again later!`)
      });

  }
  // function addUser(user) {
  //     var myHeaders = new Headers()
  //     myHeaders.append("content-Type", "application/json")

  //     var requestOptions = {
  //         method: 'POST',
  //         headers: myHeaders,
  //         body: raw,
  //         redirect: 'follow'
  //     };

  //     fetch("http://localhost:4200/createUser", requestOptions)
  //         .then(response => response.text())
  //         .then(result => {
  //             console.log(result)
  //             let resultnewUser = JSON.parse(result)
  //             setId(resultnewUser.user._id)
  //             enter(resultnewUser.user.name)

  //             //let jwt = resultnewUser.jwt;
  //         })

  //         .catch(error => {
  //             console.log('error', error)
  //             alert(`sorry!${name} we have problem ,try again later!`)
  //         });
  // }

  return (<>
    <label>The titel</label>
    <input type="text"
      onChange={(e) => setoneTitel(e.target.value)}>

    </input>
    <label>The body</label>
    <input type="text"

      onChange={(e) => setoneBody(e.target.value)}>

    </input>

    {/* <input type="text"
                    onChange={(e) => Id(e.target.value)}>

                </input> */}

    {/* <input type="text"
                    onChange={(e) => addPost(e.target.value)}>

                </input> */}
    <button onClick={AddPost}>save</button>
  </>
  );
}))



