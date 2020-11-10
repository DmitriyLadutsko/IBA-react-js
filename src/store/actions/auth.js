import * as actionTypes from './types';

export const onLoginUser = (user) => {
    return dispatch => {
        dispatch(setUser(user));
        localStorage.setItem('username', user.username);
        localStorage.setItem('password', user.password);
    };
};

export const setUser = (user) => {
    const isAdmin = user.username === 'testAdmin@gmail.com' && user.password === '12345yuiopp';
    return {
        type: actionTypes.SET_USER,
        user: user,
        isAdmin: isAdmin
    }
}

export const onLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    return {
        type: actionTypes.LOGOUT_USER
    };
};

export const authCheckState = () => {
    return dispatch => {
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        if (!username && !password) {
            dispatch(onLogout());
        } else {
            const user = {password: password, username: username};
            dispatch(onLoginUser(user));
        }
    }
}

