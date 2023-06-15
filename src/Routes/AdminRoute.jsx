import React from 'react';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation();
    const [isAdmin] = useAdmin()
    const {Admin , Instructor ,Student} = isAdmin || [];
    if(loading){
        return <>
            <div className='lg:ml-[40%] lg:mt-[10%]'>
            <InfinitySpin 
        width='500'
        color="#4fa94d"
        height='500'
      />
        </div>
        </>
    }
    if(user && Admin){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;