import { LOGIN, REGISTER, FORGOTPASSWORD, LOGOUT } from '../types/auth';

const initialState = {
    isLoggedIn: false,
    user: {}
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            if (action.payload.email == 'jay@jay.com') {
                return {...state, user: action.payload, isLoggedIn: true};
            } else {
                return {...state, user: {}, isLoggedIn: false};
            }
        case LOGOUT:
            return {...state, user: {}, isLoggedIn: false};
        default:
            return state;
    }
}

export default authReducer;