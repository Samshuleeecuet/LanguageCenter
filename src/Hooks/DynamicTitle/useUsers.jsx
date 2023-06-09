import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../Provider/AuthProvider';

const useUsers = () => {
    const {user} = useContext(AuthContext)
    const token= localStorage.getItem("access-token")
    //console.log(token)
    const { data: users = [],refetch,isLoading, isError, error } = useQuery({
        queryKey: ['users',user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`,{
                headers :{
                    authorization: `bearer ${token}`
                }
            })
            return res.json()
        }
    })
    return [users,refetch,isLoading]
};
export default useUsers;