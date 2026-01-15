import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-gray-200 min-h-screen'>
            <div className='w-11/12 mx-auto py-10'>
                <Navbar ></Navbar>
            </div>
            <main>
                <Outlet></Outlet>
            </main>

        </div>
    );
};

export default AuthLayout;