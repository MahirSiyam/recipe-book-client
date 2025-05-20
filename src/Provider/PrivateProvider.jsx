import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateProvider = ({children}) => {
    const {user , loading} = use(AuthContext);

    const location = useLocation();
    console.log(location);

    if(loading)
    {
        return <Loading></Loading>;
    }

    if(user && user?.email)
    {
        return children;
    }
    return <Navigate state={loading.pathname} to={`/auth/login`}></Navigate>
};

export default PrivateProvider;