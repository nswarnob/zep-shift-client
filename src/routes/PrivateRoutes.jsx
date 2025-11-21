import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();

    if(loading){
        return <div>
            <p>Loading....</p>
        </div>
    }

if(!user){
    return <Navigate to={'/login'}></Navigate>
}

  return children;
}

export default PrivateRoutes    