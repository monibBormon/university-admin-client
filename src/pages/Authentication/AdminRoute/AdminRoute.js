import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const AdminRoute = ({ children }) => {
    const { user, admin, isLoading } = useFirebase();
    const location = useLocation();
    if (isLoading) { return <h2>Loading</h2> }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;