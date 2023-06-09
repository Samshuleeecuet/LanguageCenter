import React from 'react';
import useClasses from '../../../Hooks/DynamicTitle/useClasses';
import EachClass from './EachClass';
const ManageClasses = () => {
    const [classes] = useClasses();
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
            classes?.map((eachclass) => <EachClass key={eachclass._id} eachclass={eachclass}/>) 
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageClasses;