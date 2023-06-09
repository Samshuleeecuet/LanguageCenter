import React from 'react';
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../Hooks/useAuth';


const AddClassList = () => {
    const {user} = useAuth()
  const { data: classes = [],refetch,isLoading, isError, error } = useQuery({
    queryKey: ['classes'],
    queryFn: async ()=>{
        const response = await fetch(`http://localhost:5000/instructorclasses/${user?.email}`)
        return response.json()
    }
})
    return (
            <div className=' w-full'>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Class Image</th>
                    <th>Class Name</th>
                    <th>Total Enrolled<br/>Students</th>
                    <th>Status</th>
                    <th>Feedback</th>
                </tr>
                </thead>
                <tbody>
                    {
                        classes?.map((eachClass,index)=> <tr key={eachClass._id}>
                                <td>{index+1}</td>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={eachClass.classimage} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    
                                        </div>
                                    </td>
                                    <th>
                                        <div className='font-bold'>{eachClass.classname}</div>
                                    </th>
                                    <th>
                                        <div className='font-medium text-xs'>{eachClass.enrollstudent}</div>
                                    </th>
                                    <th>
                                        <div className='font-medium text-xs'>{eachClass.status}</div>
                                    </th>
                                    <th>
                                        <div className='font-medium text-xs'>{eachClass.feedback}</div>
                                    </th>
                        </tr>)
                    }

                </tbody>
            </table>
            </div>
            </div>
    );
};

export default AddClassList;