import React from 'react';
import { Navigate } from "react-router-dom";

const GuardedRoute = ({ children }: _Props) => {
    const token = localStorage.getItem('accessToken');
    console.log(token)
    if (token !== '' && token !== null) {
        return children;
    }
    // if not token redirect to login page
    return <Navigate to="/login" replace />;
};

type _Props = {
    children: any;
}

export default GuardedRoute;