import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const token= localStorage.getItem("access-token")
    const { data: users = [],refetch,isLoading, isError, error } = useQuery({
        queryKey: ['users',user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure(`/users?email=${user?.email}`)
            return res.data
        }
    })
    return [users,refetch,isLoading]
};
export default useUsers;