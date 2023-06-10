import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useUpdateClass = (classid) => {
    const token= localStorage.getItem("access-token")
  const { data: updatedCart = [],refetch,isLoading, isError, error } = useQuery({
    queryKey: ['updatedCart'],
    queryFn: async ()=>{
        const response = await fetch(`http://localhost:5000/updateclass/${classid}`,{
            headers :{
                authorization: `bearer ${token}`
            }
        })
        return response.json()
    }
})
return [updatedCart,refetch]
};

export default useUpdateClass;