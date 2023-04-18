import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)

    if(user){
        return children
    }
    
    if(loading){
        return <h1>Loading...</h1>
    }


    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoute;