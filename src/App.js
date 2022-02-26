import { Fragment } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './components/home.component';
import Login from './components/auth/login.component';
import Register from './components/auth/register.component';
import ForgotPassword from './components/auth/forgotpassword.component';
import ProtectedRoute from './components/ProtectedRoute';

import { useSelector, useDispatch } from 'react-redux'
import { logout } from './redux/actions/authAction';
import { useEffect } from 'react';

function App() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogout = (e) => {
        dispatch(logout());
        navigate('/sign-in');
    }

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">TentangKode</a>
                    <div className="collapse navbar-collapse" id="navbarToggle">
                        <ul className="navbar-nav ml-auto">
                            { auth.isLoggedIn === true ? (
                                <Fragment>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/"}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={handleLogout} className="nav-link" href="#">Logout</a>
                                    </li>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-in"}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-up"}>Sign Up</Link>
                                    </li>
                                </Fragment>
                            ) }
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Routes>
                        <Route exact path='/' element={<ProtectedRoute/>}>
                            <Route exact path='/' element={<Home/>}/>
                        </Route>
                        <Route path="/sign-in" element={<Login/>}/>
                        <Route path="/sign-up" element={<Register/>}/>
                        <Route path="/forgot-pwd" element={<ForgotPassword/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
