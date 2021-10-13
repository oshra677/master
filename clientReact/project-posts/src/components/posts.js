import React, { component } from 'react'
import { setState, useState, useEffect } from 'react'
import { userAction } from '../redux/actions/userAction'
import { postAction } from '../redux/actions/postAction'
import { viewAction } from '../redux/actions/viewAction'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux'
import { Link, withRouter } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import Views from './views'
import Postdetail from './post-detail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function mapStateToProps(state) {
  return {
    listViews: state.userReducer.listViews,
    listPosts: state.postReducer.listPosts,

  };
}

const mapDispatchTopProps = (disaptch) => {
  return {
    addPost: (item) => disaptch(postAction.setName(item)),
    deletePost: (item) => disaptch(postAction.deletePost(item)),
    setTitle: (title, index) => disaptch(postAction.setTitle([title, index])),
    setBody: (body, index) => disaptch(postAction.setBody([body, index])),
    setViews: (views) => disaptch(viewAction.setViews(views)),

  }
}

//(האינדקס)  צריך להציג את  הרשימה וכשהתוכן משתנה לשלוח לפונקציה המתאימה את מספר האוביקט ברשימה והערך  
export default connect(mapStateToProps, mapDispatchTopProps)(function Posts(props) {
  const { setViews, listPosts, setListPosts, addPost, deletePost, setTitle, setBody } = props
  // const [checked, setChecked] = React.useState(false);
  const [show, setShow] = useState(false)

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  // const [show, setShow] = useState(false)
  function handleChange(event, item) {
    //setChecked(event.target.checked);
    debugger
    console.log("i am in delete")
    console.log(event)
    console.log(item)
    delPost(item)
    // console.log("before"+JSON.parse(listPosts))
    deletePost(item)
    // console.log("after"+JSON.parse(listPosts))
  }
  function handleupdate(event, item) {
    //setChecked(event.target.checked);
    debugger
    console.log("i am in update")
    console.log(event)
    console.log(item)

    updatePost(item)
    // console.log("after"+JSON.arse(listPosts))

  }
  async function updatePost(item) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(item);

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost:4200/updatePost/${item._id}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  function delPost(item) {
    console.log('deletingggggggggggggggggg');
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };
    console.log('delpost' + item)
    fetch(`http://localhost:4200/deletePost/${item.userId}/${item._id}`, requestOptions)

      // fetch("localhost:4200/deletePost/604f87e5a284a15b10ad0260/604f8afca284a15b10ad026a", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log("resultttttttttt" + result)

      })
      .catch(error => console.log('error', error));
  }

  return (
    <>
      <div className='listPosts' style={{
        //  width:"600px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "LightBlue", alignItems: "center", justifyContent: "center",

      }}>
        <p style={{ textAlign: "center" }}> <button className="btn col-2" > <Link to="/views">views</Link></button></p>

        <br></br>
        <button class="addp" onClick={() => { setShow(true) }} >add post</button>
        {show ?
          <Postdetail setShow={setShow}></Postdetail>

          : ""
        }
        <br></br>
        {console.log("posts" + listPosts)}
        {listPosts ?
          <div >
            <div>

              <table style={{

                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "DarkTurquoise", alignItems: "center", justifyContent: "center"
              }} className="table table-bordered table-hover" style={{ direction: 'rtl' }}>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>



                </tr>
                {listPosts.map((item, index) => (

                  <tr key={item} style={{ backgroundColor: "LightPink", alignItems: "center", justifyContent: "center" }}>

                    <td className="col-3">
                      <Card className={classes.root}>
                        <CardContent>
                          <h1>Title</h1>
                          <Typography variant="h5" component="h2">
                            <input type="text" value={listPosts[index].title}
                              onChange={(e) => setTitle(e.target.value, index)}></input>
                          </Typography>
                          <h1>Body</h1>
                          <Typography className={classes.pos} color="textSecondary">
                            <input type="text" value={listPosts[index].body}
                              onChange={(e) => setBody(e.target.value, index)}>

                            </input>
                          </Typography>
                        </CardContent>
                        Delete
                      <Checkbox
                          defaultChecked
                          indeterminate
                          onChange={(e) => { handleChange(e.target.value, item) }}
                          // onClick={handleChange((e) => e.target.value, item)}

                          inputProps={{ 'aria-label': 'indeterminate checkbox' }}

                        />
                        <br></br>
                        Update
                      <Checkbox
                          defaultChecked
                          indeterminate
                          onChange={(e) => { handleupdate(e.target.value, item) }}
                          // onClick={handleupdate((e) => e.target.value, item)}

                          inputProps={{ 'aria-label': 'indeterminate checkbox' }}

                        />
                      </Card>
                    </td>

                  </tr>
                ))}
              </table>
            </div>

          </div> : "no posts"}

      </div>
      {/* <div style={{ display: showInfo ? "block" : "none" }}>info</div> */}


    </>
  )
})






// import React, { component } from 'react'
// import { setState, useState, useEffect } from 'react'
// import { userAction } from '../redux/actions/userAction'
// import { postAction } from '../redux/actions/postAction'
// import { viewAction } from '../redux/actions/viewAction'

// import { connect } from 'react-redux'
// import { Link, withRouter } from "react-router-dom";
// import Checkbox from '@material-ui/core/Checkbox';
// import Views from './views'
// import Postdetail from './post-detail'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useParams,
// } from "react-router-dom";

// function mapStateToProps(state) {
//   return {
//     listViews: state.userReducer.listViews,
//     listPosts: state.postReducer.listPosts,

//   };
// }

// const mapDispatchTopProps = (disaptch) => {
//   return {
//     addPost: (item) => disaptch(postAction.setName(item)),
//     deletePost: (item) => disaptch(postAction.deletePost(item)),
//     setTitle: (title, index) => disaptch(postAction.setTitle([title, index])),
//     setBody: (body, index) => disaptch(postAction.setBody([body, index])),
//     setViews: (views) => disaptch(viewAction.setViews(views)),

//   }
// }

// //(האינדקס)  צריך להציג את  הרשימה וכשהתוכן משתנה לשלוח לפונקציה המתאימה את מספר האוביקט ברשימה והערך  
// export default connect(mapStateToProps, mapDispatchTopProps)(function Posts(props) {
//   const { setViews, listPosts, setListPosts, addPost, deletePost, setTitle, setBody } = props
//   // const [checked, setChecked] = React.useState(false);
//   const [show, setShow] = useState(false)
//   // const [show, setShow] = useState(false)
//   function handleChange(event, item) {
//     //setChecked(event.target.checked);
//     debugger
//     console.log("i am in delete")
//     console.log(event)
//     console.log(item)
//     delPost(item)
//     // console.log("before"+JSON.parse(listPosts))
//     deletePost(item)
//     // console.log("after"+JSON.parse(listPosts))
//   }
//   function handleupdate(event, item) {
//     //setChecked(event.target.checked);
//     debugger
//     console.log("i am in update")
//     console.log(event)
//     console.log(item)

//     updatePost(item)
//     // console.log("after"+JSON.arse(listPosts))

//   }
//   async function updatePost(item) {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify(item);

//     var requestOptions = {
//       method: 'PUT',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow'
//     };

//     fetch(`http://localhost:4200/updatePost/${item._id}`, requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
//   }

//   function delPost(item) {
//     console.log('deletingggggggggggggggggg');
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var requestOptions = {
//       method: 'DELETE',
//       headers: myHeaders,
//       redirect: 'follow'
//     };
//     console.log('delpost' + item)
//     fetch(`http://localhost:4200/deletePost/${item.userId}/${item._id}`, requestOptions)

//       // fetch("localhost:4200/deletePost/604f87e5a284a15b10ad0260/604f8afca284a15b10ad026a", requestOptions)
//       .then(response => response.text())
//       .then(result => {
//         console.log("resultttttttttt" + result)

//       })
//       .catch(error => console.log('error', error));
//   }
//   // useEffect(async () => {
//   //   console.log("bbbbb")

//   //   var myHeaders = new Headers();
//   //   myHeaders.append("Content-Type", "application/json");

//   //   var requestOptions = {
//   //     method: 'GET',
//   //     headers: myHeaders,
//   //     redirect: 'follow'
//   //   };
//   //   console.log("hiiiii")
//   //   fetch("http://localhost:4200/getAllPostsByIdUser/604f844aa284a15b10ad025c", requestOptions)
//   //     .then(response => response.text())
//   //     .then(result => {
//   //       console.log("jjjjjj")

//   //       console.log(result)
//   //       debugger
//   //       let resultViews = JSON.parse(result).posts
//   //       if (resultViews)
//   //         setListPosts(resultViews.views.posts.views)

//   //       else
//   //         alert("no views")
//   //     })
//   //     .catch(error => console.log('error', error));

//   // }, [])

//   return (
//     <>
//       <div className='listPosts' style={{
//               //  width:"600px",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "DarkTurquoise",alignItems: "center",justifyContent: "center",

//               }}>
//         <Link to="/views">views</Link>
//         <br></br>
//         {/* <Link to="/postdetail">add post</Link> */}
//         {/* <Switch>
//         <Route path='/views'>
//           <Views></Views>
//         </Route></Switch> */}
//         <Link to="/views">views</Link>

//         {console.log("posts" + listPosts)}
//         {listPosts ?
//           <div className="row">
//             <div className="col-20">

//               <table style={{
//                width:"200px",

//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "DarkTurquoise", width:"300px",alignItems: "center",justifyContent: "center"
//               }} className="table table-bordered table-hover" style={{ direction: 'rtl' }}>
//                 <tr>
//                   <td>Delete</td>
//                   <td>Update</td>

//                   <td>Title</td>
//                   <td>Body</td>
//                 </tr>
//                 {listPosts.map((item, index) => (

//                   <tr key={item} style={{backgroundColor: "LightPink",alignItems: "center",justifyContent: "center"}}>
//                     <td style={{backgroundColor: "gray",alignItems: "center",justifyContent: "center"}}>
//                       {/* <button onClick={(e) => { handleChange(e.target.value, item) }} >delete</button> */}
//                       <Checkbox
//                         defaultChecked
//                         indeterminate
//                         onChange={(e) => { handleChange(e.target.value, item) }}
//                         // onClick={handleChange((e) => e.target.value, item)}

//                         inputProps={{ 'aria-label': 'indeterminate checkbox' }}

//                       />
//                     </td>
//                     <td style={{backgroundColor: "gray",alignItems: "center",justifyContent: "center"}}>
//                       <Checkbox
//                         defaultChecked
//                         indeterminate
//                         onChange={(e) => { handleupdate(e.target.value, item) }}
//                         // onClick={handleupdate((e) => e.target.value, item)}

//                         inputProps={{ 'aria-label': 'indeterminate checkbox' }}

//                       />
//                     </td>
//                     <td  className="col-3">
//                       <input type="text" value={listPosts[index].title}
//                         onChange={(e) => setTitle(e.target.value, index)}></input>
//                     </td>
//                     <td className="col-7">
//                       <input type="text" value={listPosts[index].body}
//                         onChange={(e) => setBody(e.target.value, index)}>

//                       </input>
//                     </td>

//                   </tr>
//                 ))}
//               </table>
//             </div>
//           </div> : "no posts"}

//       </div>
//       {/* <div style={{ display: showInfo ? "block" : "none" }}>info</div> */}

//       <button class="addp" onClick={() => { setShow(true) }} >add post</button>
//       {show ?
//         <Postdetail setShow={setShow}></Postdetail>

//         : ""
//       }
//     </>
//   )
// })
