import { useQuery } from '@tanstack/react-query'
import useAuth from '../useAuth';

const useClasses = ()=>{
  const {user} = useAuth()
  const { data: classes = [],refetch,isLoading, isError, error } = useQuery({
    queryKey: ['classes'],
    queryFn: async ()=>{
        const response = await fetch(`http://localhost:5000/classes?email=${user?.email}`)
        return response.json()
    }
})
return [classes,refetch,isLoading]

};

export default useClasses;