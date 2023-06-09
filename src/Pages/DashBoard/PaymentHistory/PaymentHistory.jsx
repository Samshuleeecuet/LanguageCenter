import React from 'react';
import useDynamicTitle from '../../../Hooks/DynamicTitle/useDynamicTitle';

const PaymentHistory = () => {
    useDynamicTitle('Payment')
    return (
        <div>
            <p>Payment</p>
        </div>
    );
};

export default PaymentHistory;