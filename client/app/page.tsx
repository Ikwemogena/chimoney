import { fetchUserTransactions, fetchWalletSummary } from "./lib/actions";
import Payment from "./ui/Payment";
import InfoCard from "./ui/dashboard/InfoCard";
import TransactionInfo from "./ui/dashboard/TransactionInfo";
import WalletInfoCard from "./ui/dashboard/WalletInfoCard";

export default async function Home() {

  const transactions: [] = await fetchUserTransactions()

  const walletSummary: any[] = await fetchWalletSummary() as [];

  let totalWalletBalance = 0

  if (walletSummary) {
    totalWalletBalance = walletSummary.reduce((acc: any, wallet: any) => acc + wallet.balance, 0);
  }

  const infoItems = [
    { value: totalWalletBalance, label: "Available Balance" },
    { value: "--", label: "Unpaid Requests" },
    { value: "--", label: "Paid Requests" }
  ];

  return (
    <>
      <section className="dashboard">
        <div className="dashboard__container">
          <div className="dashboard__greeting">
            <h2 className="dashboard__greeting-title">Good morning, Morgz</h2>
            <p className="dashboard__greeting-subtitle">Here's what you missed while you were away</p>
          </div>
          <div className="flex">
            <div className="dashboard__info">
              {infoItems.map((item, index) => (
                <InfoCard key={index} value={item.value} label={item.label} />
              ))}
            </div>
            <Payment />
          </div>
        </div>
        <div className="dashboard__transactions">
          <div className="dashboard__transactions-header">
            <div className="dashboard__transactions-title">
              <h3>recent transactions</h3>
              <button>view all</button>
            </div>

            <div className="dashboard__transactions-wrapper">
              {transactions && transactions.length ?
                transactions.slice(0, 5).map((transaction: any, index: any) => (
                  <TransactionInfo key={index} transaction={transaction} />
                )) : <div className="no-transactions">
                  <p>No transactions yet</p>
                </div>
              }
            </div>
          </div>
          {walletSummary ? <WalletInfoCard wallets={walletSummary} /> : <p>no records</p>}
        </div>
      </section>

    </>

  );
}