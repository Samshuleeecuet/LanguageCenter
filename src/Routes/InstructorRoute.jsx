import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const InstructorRoute = ({children}) => {
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
    if(user && Instructor){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default InstructorRoute;