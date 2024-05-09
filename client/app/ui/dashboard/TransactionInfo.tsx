import { formatDate } from "@/utils/date"

function TransactionInfo({ transaction }: any) {
    return (
        <div className="dashboard__transactions-list">
            <div className="dashboard__transactions-item">
                <p>i</p>
                <div className="dashboard__transactions-details">
                    <h4>{transaction.type}</h4>
                    <p>{transaction.redeemData.receiver}</p>
                </div>
            </div>
            <div className="dashboard__transactions-summary">
                <h4>{transaction.valueInUSD}USD</h4>
                <p>{formatDate(transaction.paymentDate)}</p>
            </div>
        </div>
    )
}

export default TransactionInfo