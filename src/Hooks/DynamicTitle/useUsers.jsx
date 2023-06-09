import React from 'react';
import { useQuery } from '@tanstack/react-query'

const useUsers = () => {
    const { data: users = [],refetch,isLoading, isError, error } = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/users`)
            return response.json()
        }
    })
    return [users,refetch,isLoading]
};

export default useUsers;