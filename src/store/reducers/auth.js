import * as actionTypes from '../actions/types';

const initialState = {
    user: null,
    // isAuth: false,
    isAdmin: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
                isAdmin: action.isAdmin
            };
        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                user: null,
                isAdmin: false
            };
        default: return state;
    }
};

export default reducer;