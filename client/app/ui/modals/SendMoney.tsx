import React from 'react'

interface ModalProps {
    open: boolean
    close: () => void
}


function PaymentModal({ open, close }: ModalProps) {
    const closePaymentModal = () => {
        close()
    }

    return (
        <>
            {
                open && <div className="modal-container">
                    <div className="payment__modal">
                        <div className='payment__modal-wrapper'>
                            <div className="payment__modal-header">
                                <h3>Send Money</h3>
                                <p onClick={() => closePaymentModal()}>close</p>
                            </div>

                            <div className="payment__modal-info">
                                <form className='payment__modal-form'>
                                    <div className='payment__modal-form-field'>
                                        <label htmlFor="">Wallet ID/Account Number</label>
                                        <input type="text" />
                                    </div>
                                    <div className='payment__modal-form-field'>
                                        <label htmlFor="">Amount</label>
                                        <input type="text" />
                                    </div>
                                    <div className='payment__modal-form-field'>
                                        <label htmlFor="">Wallet ID/Account Number</label>
                                        <input type="text" />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="payment-actions">
                            <button onClick={() => closePaymentModal()}>cancel</button>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PaymentModal