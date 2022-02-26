import { LOGIN, LOGOUT, REGISTER, FORGOTPASSWORD } from '../types/auth';

export const login = (data) => ({
    type: LOGIN,
    payload: data
});

export const logout = () => ({
    type: LOGOUT
});

export const register = () => ({
    type: REGISTER,
});

export const forgotPassword = () => ({
    type: FORGOTPASSWORD,
});