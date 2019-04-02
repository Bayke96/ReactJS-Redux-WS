import { resetPostGET, resetPostDELETE } from '../methods/FormMethods';
import { CREATE_POST, READ_POST, UPDATE_POST, DELETE_POST } from '../actions/types';

const initialState = {
    id: 0,
    userID: 0,
    title: '',
    body: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_POST:
            return { ...state };

        case READ_POST:
            state.id = action.id;
            state.userID = action.userID;
            state.title = action.title;
            state.body = action.body;
            return { ...state };

        case UPDATE_POST:
            return { ...state };

        case DELETE_POST:
            return { ...state };

        case 'RESET_POST_GET':
            resetPostGET();
            return { id: 0, userID: 0, title: '', body: '' };

        case 'RESET_POST_DELETE':
            resetPostDELETE();
            return { id: 0, userID: 0, title: '', body: '' };

        default:
            return state

    }
}

export default reducer;