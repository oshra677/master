import produce from 'immer'
import createReducer from './reducerUtils'


const initialState = {
    listPosts: [
        // {
        //     _id: "6050e58ecfe9467124ba0f9f",
        //     title: 'dolorem dolore est ipsam',
        //     body: 'dignissimos aperiam dolorem qui eum\n' +
        //         'facilis quibusdam animi sint suscipit qui sint possimus cum\n' +
        //         'quaerat magni maiores excepturi\n' +
        //         'ipsam ut commodi dolor voluptatum modi aut vitae',
        //     userId: "6050cb872f33d67230410fd2",
        // },
        // {
        //     _id: "6050e58ecfe9467124ba0f9f",
        //     title: 'dolorem dolore est ipsam',
        //     body: 'dignissimos aperiam dolorem qui eum\n' +
        //         'facilis quibusdam animi sint suscipit qui sint possimus cum\n' +
        //         'quaerat magni maiores excepturi\n' +
        //         'ipsam ut commodi dolor voluptatum modi aut vitae',
        //     userId: "6050cb872f33d67230410fd2",
        // },
        // {
        //     _id: "6050e58ecfe9467124ba0f9f",
        //     title: 'dolorem dolore est ipsam',
        //     body: 'dignissimos aperiam dolorem qui eum\n' +
        //         'facilis quibusdam animi sint suscipit qui sint possimus cum\n' +
        //         'quaerat magni maiores excepturi\n' +
        //         'ipsam ut commodi dolor voluptatum modi aut vitae',
        //     userId: "6050cb872f33d67230410fd2",
        // }
    ]
};

const posts = {
    setPosts(state, action) {
        state.listPosts = action.payload;
    },
    setTitle(state, action) {
        debugger
        state.listPosts[action.payload[1]].title = action.payload[0];
    },
    setBody(state, action) {
        debugger
        state.listPosts[action.payload[1]].body = action.payload[0];
    },
    setUserId(state, action) {
        debugger
        state.listPosts[action.payload[1]].userId = action.payload[0];
    },
    addPost(state, action) {
        debugger
        const posts = [...state.listPosts, action.payload]
        // state.listPosts.concat(action.payload);
        state.listPosts = posts
    },
    deletePost(state, action) {
        debugger
        // console.log("deletePost")
        // if (this.listPosts)
        //     console.log("before:"+this.listPosts)
        state.listPosts.concat(x => x !== action.payload);
        // if (this.listPosts)

        //     console.log("after:"+this.listPosts)

    },
    setoneTitle(state, action) {
        debugger
        state.post[action.payload[1]].title = action.payload[0];
    },
    setoneBody(state, action) {
        debugger
        state.post[action.payload[1]].body = action.payload[0];
    },
};


export default produce((state, action) => createReducer(state, action, posts), initialState);


