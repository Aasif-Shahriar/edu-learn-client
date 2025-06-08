import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <div className='container mx-auto px-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;