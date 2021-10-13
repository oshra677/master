import produce from 'immer'
import createReducer from './reducerUtils'


const initialState = {

    listViews: []
};

const views = {

    addView(state, action) {
        debugger
        state.listViews.concat(action.payload);
    },
    // deleteView(state, action) {
    //     debugger
    //     state.listViews.filter(x => x !== action.payload);
    // },
    setViews(state, action) {
        debugger
        state.listViews = action.payload;
    },

};


export default produce((state, action) => createReducer(state, action, views), initialState);


