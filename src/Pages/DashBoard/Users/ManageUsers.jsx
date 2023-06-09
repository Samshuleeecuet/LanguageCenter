import React from 'react';
import useUsers from '../../../Hooks/DynamicTitle/useUsers';
import useDynamicTitle from '../../../Hooks/DynamicTitle/useDynamicTitle';
import { FaTrashAlt } from 'react-icons/fa';

const ManageUsers = () => {
    const [users,refetch,] = useUsers()
    useDynamicTitle('All Users')
    console.log(users)
    const handleDelete = id =>{
        console.log(id)
    }
    return (
        <div className=' w-full'>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Update Role</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=><tr key={user._id}>
                            <th>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{
                                user.role === 'Admin' && <p>Admin</p>
                                }{
                                    user.role === 'Student' && <p>Student</p>
                                }
                                {
                                    user.role === 'Instructor' && <p>Instructor</p>
                                }
                                
                            </td>
                            <td>
                                {
                                    user.role === 'Admin' && <>
                                    <button className='btn btn-accent mr-2'>Instructor</button>
                                    <button className='btn btn-neutral'>Student</button>
                                    </>
                                }
                                {
                                    user.role === 'Instructor' && <>
                                    <button className='btn btn-accent mr-2'>Admin</button>
                                    <button className='btn btn-neutral'>Student</button>
                                    </>
                                }
                                {
                                    user.role === 'Student' && <>
                                    <button className='btn btn-accent mr-2'>Admin</button>
                                    <button className='btn btn-neutral'>Instructor</button>
                                    </>
                                }
                            </td>
                            <td><button onClick={()=> handleDelete(user._id)} className='btn btn-ghost bg-red-400 text-white'><FaTrashAlt></FaTrashAlt></button></td>

                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageUsers;