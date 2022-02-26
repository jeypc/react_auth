import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';

import { login } from '../../redux/actions/authAction';

function Login() {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(state));
        navigate('/');
    }

    return (
        <form onSubmit={handleLogin}>
            <h3>Sign In</h3>
            <div className="form-group">
                <label>Email address</label>
                <input value={state.email} onChange={handleInputChange} name="email" type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input value={state.password} onChange={handleInputChange} name="password" type="password" className="form-control" placeholder="Enter password" />
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">Forgot <Link to={'/forgot-pwd'}>password?</Link></p>
        </form>
    );
}

export default Login;