import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useFirebase();
    let location = useLocation();
    if (isLoading) { return <h2 className='text-center py-20 text-4xl'>Loading..</h2> }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;