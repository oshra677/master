import { userAction } from '../actions/userAction';
import { postAction } from '../actions/postAction';
import { viewAction } from '../actions/viewAction';


export const UpperToUserName = ({ dispatch, getState }) => next => action => {
    debugger;
    if (action.type === 'UPPER_TO_USER_NAME') {
        debugger
        let lastname = getState().userReducer.user.username
        let dubbelnametoupper = lastname.toUpperCase()+ " "+  action.payload.toUpperCase();
        dispatch(userAction.setUsername(dubbelnametoupper))
    }

    return next(action);
};