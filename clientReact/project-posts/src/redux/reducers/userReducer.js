import produce from 'immer'
import createReducer from './reducerUtils'

const initialState = {

    user: {
        _id: "32222",
        name: "oshra",
        phon: "525265",
        posts: [],
        email: "oshtcv@gvfcdcd",
        password: "8797987",
        userId: "32268686"
    }
};

const users = {

    setUser(state, action) {
        state.user.user = action.payload;
    },
    addUser(state, action) {
        state.user = action.payload;
    },    // set_Id(state, action) {

    //     state.user._id = action.payload;
    // },
    // setName(state, action) {

    //     state.user.name = action.payload;
    // },
    // setPhon(state, action) {

    //     state.user.phon = action.payload;
    // },
    // setPosts(state, action) {

    //     state.user.posts = action.payload;
    // },
    // setEmail(state, action) {

    //     state.user.email = action.payload;
    // },
    // setPassword(state, action) {

    //     state.user.password = action.payload;
    // },
    setUserId(state, action) {

        state.user.userId = action.payload;
    },

};

export default produce((state, action) => createReducer(state, action, users), initialState);


