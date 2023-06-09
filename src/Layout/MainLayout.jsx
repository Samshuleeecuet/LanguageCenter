import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import { InfinitySpin } from 'react-loader-spinner'


const MainLayout = () => {
    const [Loader,setLoader]= useState(true);
    
    setTimeout(()=>{
            setLoader(false)
    },'1000')
    if(Loader){
        return <div className='lg:ml-[40%] lg:mt-[10%]'>
            <InfinitySpin 
        width='500'
        color="#4fa94d"
        height='500'
      />
        </div>
    }
    else{
        return (
            <>
            <Header/>
            <Outlet/>
            <Footer/>
            </>
        );
    }
};

export default MainLayout;