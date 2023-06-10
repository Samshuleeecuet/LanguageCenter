import React from 'react';
import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';

const useEnrolledClass = () => {
    const {user,loading} = useAuth()
    const token= localStorage.getItem("access-token")
  const { data: enrollCart = [],refetch,isLoading, isError, error } = useQuery({
    queryKey: ['enrollCart'],
    enabled: !loading,
    queryFn: async ()=>{
        const response = await fetch(`http://localhost:5000/carts/?email=${user?.email}&purchase=true`,{
            headers :{
                authorization: `bearer ${token}`
            }
        })
        return response.json()
    }
})
return [enrollCart,refetch]
};

export default useEnrolledClass;