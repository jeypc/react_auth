import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

function ProtectedRoute() {
    const auth = useSelector(state => state.auth);
    return auth.isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default ProtectedRoute;