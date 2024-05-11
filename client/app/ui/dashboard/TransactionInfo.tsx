import { formatDate } from "@/utils/date"
import { formatNumber } from "@/utils/number"

function TransactionInfo({ transaction }: any) {
    return (
        <div className="dashboard__transactions-list">
            <div className="dashboard__transactions-item">
                {/* <p>i</p> */}
                <div className="dashboard__transactions-details">
                    <h4>{transaction.status}</h4>
                    <p>{transaction.id}</p>
                </div>
            </div>
            <div className="dashboard__transactions-summary">
                <h4>{formatNumber(transaction.valueInUSD)}USD</h4>
                <p>{formatDate(transaction.paymentDate)}</p>
            </div>
        </div>
    )
}

export default TransactionInfo