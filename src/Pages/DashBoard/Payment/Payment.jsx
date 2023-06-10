import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import CheckOut from './CheckOut';

const stripePromise = loadStripe(import.meta.env.VITE_Paymnet_Gateway_PK);
const Payment = () => {
    const {classid} = useParams()
    const {user,loading} = useAuth()
    const token= localStorage.getItem("access-token")
  const { data: carts = [],refetch,isLoading, isError, error } = useQuery({
    queryKey: ['cartspay'],
    queryFn: async ()=>{
        const response = await fetch(`http://localhost:5000/cartspay/${classid}`,{
            headers :{
                authorization: `bearer ${token}`
            }
        })
        return response.json()
    }
})
const price = parseFloat(carts.price);
console.log(carts,price)
    return (
        <div>
            <p className='text-3xl mb-5 font-extrabold'>Payment Gateway</p>
            <Elements stripe={stripePromise}>
                <CheckOut cart={carts} price={price}/>
            </Elements>
        </div>
    );
};

export default Payment;