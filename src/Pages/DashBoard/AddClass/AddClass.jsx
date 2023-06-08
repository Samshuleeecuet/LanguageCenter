import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Provider/AuthProvider';
const AddClass = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);
    const onSubmit = data => {
        data.status = 'pending'
        console.log(data)
    }
    return (
        <div className='min-h-screen'>
             <h2 className='text-center text-2xl font-extrabold pb-10 '> Add New Class</h2>
            <form className='border-2 p-5 rounded-lg w-full' onSubmit={handleSubmit(onSubmit)}>
               
               <input className='border rounded-lg h-12 w-96 pl-4 mb-4 border-green-400' defaultValue="" type='text' placeholder='Enter Class Name' {...register("classname",{required: true})} required/>
               <br/>
               <input className='border rounded-lg h-12 w-96 pl-4 mb-4 border-green-400' defaultValue="" type='text' placeholder='Enter Class Image' {...register("classimage",{required: true})} required/>
               <br/>
               <input className='border rounded-lg h-12 w-96 pl-4 mb-4 border-green-400' value={user?.displayName} type='text' placeholder='Enter Instructor Name' {...register("instructorname")} required/>
               <br/>
               <input className='border rounded-lg h-12 w-96 pl-4 mb-4 border-green-400' value={user?.email} type='text' placeholder='Enter Instructor Email' {...register("instructoremail")} required/>
               <br/>
               <input className='border rounded-lg h-12 w-44 pl-4 mr-4 mb-4 border-green-400' defaultValue="" type='text' placeholder='Enter Available Seat' {...register("availableseat",{required: true})} required/>
               <input className='border rounded-lg h-12 w-44 pl-4 mb-4 border-green-400' defaultValue="" type='text' placeholder='Enter Price' {...register("price",{required: true})} required/>
               <br/>
              
               <input className='btn btn-accent text-white' type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;