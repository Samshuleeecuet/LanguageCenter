import React from 'react';
import { FaChalkboardTeacher, FaMoneyCheck, FaUserTie } from 'react-icons/fa';
import useAdmin from '../../Hooks/useAdmin';

const EachClass = ({eachClass,handleAddtoCart}) => {
    const [isAdmin] = useAdmin()
    const {Admin , Instructor ,Student} = isAdmin || [];
    const {availableseat} = eachClass || {}
    return (
        <div className={`card w-[400px] glass ${availableseat<1 && 'bg-red-600'}`}>
            <figure><img className='w-full h-72' src={eachClass.classimage} alt="car!"/></figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">{eachClass.classname}</h2>
                        <p className='flex items-center'><FaUserTie className='text-3xl mr-4'/><span className='text-lg mr-2'>Instructor :</span> <span>{eachClass.instructorname}</span></p>
                        <p className='flex items-center'><FaChalkboardTeacher className='text-3xl mr-4'/><span className='text-lg mr-2'>Available Seat :</span> <span>{eachClass.availableseat}</span></p>
                        <p className='flex items-center'><FaMoneyCheck className='text-3xl mr-4'/><span className='text-lg mr-2'>Price :</span> <span>$ {eachClass.availableseat}</span></p>
                        <div className="card-actions justify-end">
                        {
                            (Admin || Instructor || (eachClass.availableseat<1)) ? <button disabled className="btn btn-accent bg-green-600 text-white">Select</button>: <button onClick={()=>handleAddtoCart(eachClass)} className="btn btn-accent bg-green-600 text-white">Select</button>
                        }
                        </div>
                    </div>
        </div>
    );
};

export default EachClass;