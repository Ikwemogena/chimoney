import { sendMoneyToChiUser } from "@/app/lib/actions"
import { useFormState } from "react-dom"
import { SendButton } from "../button/SendButton"
import { toast } from "sonner"

interface ModalProps {
    open: boolean
    close: () => void
}

function PaymentModal({ open, close }: ModalProps) {

    const [state, formAction] = useFormState(sendMoneyToChiUser, null)


    if (state === true) {
        close()
        toast.success('Transaction successful')
    } else if (state && state.error) {
        toast.error('Transaction failed, please try again later.')
    }


    return (
        <>
            {
                open && <div className="modal-container">
                    <form action={formAction} className="payment__modal">
                        <div className='payment__modal-wrapper'>
                            <div className="payment__modal-header">
                                <h3>Send Money</h3>
                                <p onClick={() => close()}>close</p>
                            </div>

                            <div className="payment__modal-info">
                                <div className='payment__modal-form'>
                                    <div className='payment__modal-form-field'>
                                        <label htmlFor="accountID">Wallet ID/Account Number</label>
                                        <input type="text" name="accountID" />
                                    </div>
                                    <div className='payment__modal-form-field'>
                                        <label htmlFor="amount">Amount</label>
                                        <input type="number" name="amount" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="payment-actions">
                            <button onClick={() => close()}>cancel</button>
                            <SendButton text="Send" />
                        </div>
                    </form>
                </div>
            }
        </>
    )
}

export default PaymentModal