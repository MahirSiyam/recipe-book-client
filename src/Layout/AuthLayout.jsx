import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto mb-5'>
                <Navber></Navber>
            </header>
            <main className='w-11/12 mx-auto mb-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;