import { fetchUserTransactions, fetchWalletSummary } from "./lib/actions";
import InfoCard from "./ui/dashboard/InfoCard";
import TransactionInfo from "./ui/dashboard/TransactionInfo";
import WalletInfoCard from "./ui/dashboard/WalletInfoCard";

export default async function Home() {

  const infoItems = [
    { value: "23,0000", label: "Wallet Balance" },
    { value: "23", label: "Unpaid Transactions" },
    { value: "23", label: "Unpaid Transactions" },
    { value: "23", label: "Unpaid Transactions" },
  ];

  const transactions = await fetchUserTransactions("9edd014b-152f-44f2-a75f-e570c944e0d4")
  const walletSummary = await fetchWalletSummary("9edd014b-152f-44f2-a75f-e570c944e0d4")

  return (
    <section className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__greeting">
          <h2 className="dashboard__greeting-title">Good morning, Morgz</h2>
          <p className="dashboard__greeting-subtitle">Here's what you missed while you were away</p>
        </div>
        <div className="dashboard__info">
          {infoItems.map((item, index) => (
            <InfoCard key={index} value={item.value} label={item.label} />
          ))}
        </div>
      </div>
      <div className="dashboard__transactions">
        <div className="dashboard__transactions-header">
          <div className="dashboard__transactions-title">
            <h3>recent transactions</h3>
            <button>view all</button>
          </div>

          {transactions &&
            transactions.map((transaction: any, index: any) => (
              <TransactionInfo key={index} transaction={transaction} />
            ))
          }
        </div>
        <WalletInfoCard wallets={walletSummary} />
      </div>
    </section>
  );
}