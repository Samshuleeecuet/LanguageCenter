import React, { useState } from 'react';

const EachClass = ({eachclass}) => {
    const [approved,setApproved] = useState(false)
    const [deny,setDeny] = useState(false)
    const [feed,setFeedback] = useState(false)
    const {_id,classname,classimage,availableseat,enrollstudent,feedback,instructoremail,instructorname,price,status}= eachclass || {}
    //console.log(eachclass)
    const handleApproved = id =>{
        console.log(id)
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={classimage} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    
                </div>
            </td>
            <th>
                <div className='font-bold'>{classname}</div>
            </th>
            <th>
                <div className='font-medium text-xs'>{instructorname}</div>
            </th>
            <th>
                <div className='font-medium text-xs'>{instructoremail}</div>
            </th>
            <th>
                <div className='font-medium text-xs'>{availableseat}</div>
            </th>
            <th>
                <div className='font-medium text-xs'>$ {price}</div>
            </th>
            <th>
                <div className='font-medium text-xs'>{status}</div>
            </th>
            <th>
            <button disabled={approved} onClick={()=>handleApproved(_id)} className="btn btn-success">Approved</button>
            <button onClick={()=>handleDenied(_id)} className="btn btn-error">Denied</button>
            <button className="btn btn-warning">Feedback</button>
            </th>
        
            
        </tr>
    );
};

export default EachClass;