"use client"
import { useState } from 'react';
import PaymentModal from './modals/SendMoney';

function Payment() {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <>
            <div className="payment-actions">
                <button onClick={() => setIsOpen(true)}>Send Money</button>
                <button>Recieve Payment</button>
            </div>
            <PaymentModal open={isOpen} close={closeModal} />
        </>
    )
}

export default Payment