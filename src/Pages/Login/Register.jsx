import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const Register = () => {
    const schema = yup.object().shape({
        password: yup
          .string()
          .min(6, 'Password must be at least 6 characters')
          .matches(/[A-Z]/, 'Password must contain at least one capital letter')
          .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
      });

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='mt-14 lg:my-28'>
            <h2 className='text-center text-2xl font-extrabold pb-10 '>Register Now</h2>
            <div  className='ml-[30%] lg:ml-[35%]'>
            <div className="flex flex-col w-2/5 border-opacity-50">
  <div className="grid rounded-box place-items-center">
            <form className='border-2 p-5 rounded-lg w-full' onSubmit={handleSubmit(onSubmit)}>
            <input className='border rounded-lg h-12 w-80 pl-4 mb-4 border-green-400' defaultValue="" type='text' placeholder='Enter Your Name' {...register("name",{required: true})} />
               <br/>
               
               <input className='border rounded-lg h-12 w-80 pl-4 mb-4 border-green-400' defaultValue="" type='email' placeholder='Enter Your Email' {...register("email",{required: true})} required/>
               <br/>
              
               <input className='border rounded-lg h-12 w-80 mb-4 pl-4 border-green-400' defaultValue="" placeholder='Enter Your Password' {...register("password",{required: true},{pattern: /^[A-Z]+$/i })} required />
               <br/>

               <input className='border rounded-lg h-12 w-80 mb-4 pl-4 border-green-400' defaultValue="" placeholder='Enter Confirm Password' {...register("confirmpassword",{required: true})} required />
               <br/>
               <input className='border rounded-lg h-12 w-80 pl-4 mb-4 border-green-400' defaultValue="" type='text' placeholder='Enter PhotoUrl' {...register("photourl",{required: true})}/>
               <br/>
               {
                (errors.password && errors.email) && <span className='text-red-500'>Email & Password is required</span>
               }
               {
                errors.email && <span className='text-red-500'>Email is required</span>
               }
               {
                errors.password && <span className='text-red-500'>Password is required</span>
               }
               <p className='pb-4'>Don't have an account? <Link className='link-hover text-green-700' to='/register'>Register</Link></p>
               
               <input className='btn btn-accent text-white' type="submit" value="Login" />
           </form>
           </div>
        </div>
    </div>
</div>
    );
};

export default Register;