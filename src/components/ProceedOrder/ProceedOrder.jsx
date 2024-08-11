import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
import './ProceedOrder.css'

const stripePromise = loadStripe('pk_test_51PmZ97FW0ZiV4vTBvuzzsNhtZwSIACZvaDASdP9EOe45vYpQ9fHdAuyr96dNSuoLtTww36DW8H5IX4U6XNTlYjy300x4U3H0gj')

const ProceedOrder = () => {
    return (
        <div className="container mx-auto">
            <Elements stripe={stripePromise}>
                <CheckOutForm/>
            </Elements>
        </div>
    );
};

export default ProceedOrder;
