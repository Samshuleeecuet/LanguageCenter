import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        
        </>
    );
};

export default MainLayout;