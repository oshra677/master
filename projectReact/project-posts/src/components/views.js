
import React, { component } from 'react'
import { setState, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { viewAction } from '../redux/actions/viewAction'
import { postAction } from '../redux/actions/postAction';
import Posts from './posts'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect, withRouter
} from "react-router-dom";

import Checkbox from '@material-ui/core/Checkbox';

function mapStateToProps(state) {
    return {
        listPostViews: state.viewReducer.listViews,
        listPosts: state.postReducer.listPosts,
        listPosts1: [
            {
                _id: "6050e58ecfe9467124ba0f9f",
                title: 'dolorem dolore est ipsam',
                body: 'dignissimos aperiam dolorem qui eum\n' +
                    'facilis quibusdam animi sint suscipit qui sint possimus cum\n' +
                    'quaerat magni maiores excepturi\n' +
                    'ipsam ut commodi dolor voluptatum modi aut vitae',
                userId: "6050cb872f33d67230410fd2",
            },
            {
                _id: "6050e58ecfe9467124ba0f9f",
                title: 'dolorem dolore est ipsam',
                body: 'dignissimos aperiam dolorem qui eum\n' +
                    'facilis quibusdam animi sint suscipit qui sint possimus cum\n' +
                    'quaerat magni maiores excepturi\n' +
                    'ipsam ut commodi dolor voluptatum modi aut vitae',
                userId: "6050cb872f33d67230410fd2",
            },
            {
                _id: "6050e58ecfe9467124ba0f9f",
                title: 'dolorem dolore est ipsam',
                body: 'dignissimos aperiam dolorem qui eum\n' +
                    'facilis quibusdam animi sint suscipit qui sint possimus cum\n' +
                    'quaerat magni maiores excepturi\n' +
                    'ipsam ut commodi dolor voluptatum modi aut vitae',
                userId: "6050cb872f33d67230410fd2",
            }
        ],
        listViews1: [
            {
                _id: "6050e58ecfe9467124ba0f9f",
                date: 31 / 10 / 2000,
                PostId: "6050e58ecfe9467124ba0f9f",
            },
            {
                _id: "6050e58ecfe9467124ba0f9f",
                date: 5 / 10 / 2000,
                PostId: "6050e58ecfe9467124ba0f9f",
            },
            {
                _id: "6050e58ecfe9467124ba0f9f",
                date: 9 / 10 / 2000,
                PostId: "6050e58ecfe9467124ba0f9f",
            }
        ]
    };
}

const mapDispatchTopProps = (dispatch) => ({
    setPosts: (listPost) => dispatch(postAction.setPosts(listPost)),
    //addView: (name, index) => disaptch(viewAction.setName(item)),
    deleteView: (id) => dispatch(viewAction.deleteView(id)),
    setViews: (listViews) => dispatch(viewAction.setViews(listViews)),


})


export default connect(mapStateToProps, mapDispatchTopProps)(function Views(props) {
    const { addView, deleteView, listPostViews, setViews, setPosts } = props;
    // const [listViews, setListViews] = useState(null)
    const [checked, setChecked] = React.useState(true);
    const [viewItem, setViewItem] = useState({ views: {} })
    const listViews1 = [
        {
            _id: "6050e58ecfe9467124ba0f9f",
            date: 31 / 10 / 2000,
            PostId: "6050cb872f33d67230410fd2",
        },
        {
            _id: "6050e58ecfe9467124ba0f9f",
            date: 5 / 10 / 2000,
            PostId: "6050cb872f33d67230410fd2",
        },
        {
            _id: "6050e58ecfe9467124ba0f9f",
            date: 9 / 10 / 2000,
            PostId: "6050cb872f33d67230410fd2",
        }
    ]
    useEffect(async () => {
        console.log("bbbbb")

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',

            redirect: 'follow'
        };
        console.log("hiiiii")
        fetch("http://localhost:4200/getViewsByIdUser/604f844aa284a15b10ad025c", requestOptions)
            .then(response => response.text())
            .then(result => {
                debugger
                let resultViews = JSON.parse(result)
                console.log("result");
                console.log(resultViews)
                if (resultViews) {
                    console.log("use Effect");
                    setPosts(resultViews.views.posts)
                    setViews(resultViews.views.posts)
                    console.log("posts");
                    console.log(resultViews.views.posts)
                    console.log("views");
                    console.log(resultViews.views.posts[0].views)

                    // console.log("my views:" + resultViews.views.posts);
                }
                else
                    alert(resultViews.massege)
            })
            .catch(error => console.log('error', error));

    }, [])

    function handleChange(event, item) {
        //setChecked(event.target.checked);
        // deleteView(item._id)jj
    }


    return (
        <>
            <div className='listViews'>
                <Switch>
                    <Route path='/posts'>
                        <Posts></Posts>
                    </Route></Switch>
                <p style={{ textAlign: "center" }}> <button className="btn col-2" > <Link to="/posts">Posts</Link></button></p>


                {console.log(listPostViews)}

                {listPostViews ?

                    <div className="row" style={{alignItems: "center",justifyContent: "center"}}>

                        <div className="col-10">
                            <h1>my views</h1>
                            <table style={{ width: '1rem' ,}} className="table table-bordered table-hover" style={{ direction: 'rtl' }}>
                                <tr>
                                    {/* <td>delete</td>
                                    <td>date view</td> */}
                                </tr>
                                {console.log(listPostViews)}
                                {listPostViews.map((item, index) => (
                                    <tr key={item}>
                                        <tr>
                                            <td style={{background:"Pink"}}>views post {item.title}:</td>
                                        </tr>
                                        {/* {setViewItem(item)} */}
                                        {listPostViews[index].views==""?
                                        <p style={{background:"LightGray"}}>no views</p>:""
                                        }
                                        {listPostViews[index].views.map((item2, index) => (
                                            <tr key={item2}>
                                                <td>
                                                    {/* <Checkbox
                                                        defaultChecked
                                                        indeterminate
                                                        onChange={handleChange((e) => e.target.value, item)}
                                                        inputProps={{ 'aria-label': 'indeterminate checkbox' }}
                                                    /> */}
                                                </td>
                                                <td>
                                                    <label>{item2.date}</label>
                                                </td>
                                            </tr>
                                        ))}

                                    </tr>
                                ))}

                            </table>

                        </div>

                    </div> : "jhj"}

            </div>
        </>
    )
})