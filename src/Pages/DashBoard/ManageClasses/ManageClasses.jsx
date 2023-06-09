import React, { useState } from 'react';
import useClasses from '../../../Hooks/DynamicTitle/useClasses';
import EachClass from './EachClass';
import Swal from 'sweetalert2';


const ManageClasses = () => {
    const [classes,refetch,] = useClasses();
    const handleApproved = id =>{
        const data = {status:'Approved'}
         fetch(`http://localhost:5000/classes?id=${id}`,{
             method: 'PUT',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(data)
         })
         .then(res=> res.json())
         .then(data=>{
             if(data.modifiedCount>0){
                 refetch()
                 Swal.fire({
                     position: 'top-end',
                     icon: 'success',
                     title: 'Class Approved Successfully',
                     showConfirmButton: false,
                     timer: 1500
                   })
             }
         })
     }
     const handleDeny = id => {
        const data = {status:'Denied'}
         fetch(`http://localhost:5000/classes?id=${id}`,{
             method: 'PUT',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(data)
         })
         .then(res=> res.json())
         .then(data=>{
             if(data.modifiedCount>0){
                 refetch()
                 Swal.fire({
                     position: 'top-end',
                     icon: 'error',
                     title: 'Class Denied Successfully',
                     showConfirmButton: false,
                     timer: 1500
                   })
             }
         })

     }
     if(classes.length<1){
        return <div>
            <p className='text-xl font-extrabold'>No Class Found</p>
        </div>
     }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Class Image</th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Instructor Email</th>
        <th>Available Seat</th>
        <th>Price</th>
        <th>Status</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
            classes?.map((eachclass) => <EachClass handleApproved={handleApproved} key={eachclass._id} eachclass={eachclass} handleDeny={handleDeny}/>)  
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageClasses;