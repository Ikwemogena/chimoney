// "use client"
// import { useState } from "react";
import { fetchUserTransactions, fetchWalletSummary } from "./lib/actions";
import Payment from "./ui/Payment";
import InfoCard from "./ui/dashboard/InfoCard";
import TransactionInfo from "./ui/dashboard/TransactionInfo";
import WalletInfoCard from "./ui/dashboard/WalletInfoCard";
import PaymentModal from "./ui/modals/SendMoney";

export default async function Home() {

  // const [isOpen, setIsOpen] = useState(false);

  const transactions = await fetchUserTransactions("9edd014b-152f-44f2-a75f-e570c944e0d4")
  console.log(transactions)

  // const walletSummary: any[] = await fetchWalletSummary("9edd014b-152f-44f2-a75f-e570c944e0d4") as any[];

  // console.log(walletSummary[0].transactions)
  // const totalWalletBalance = walletSummary.reduce((acc: any, wallet: any) => acc + wallet.balance, 0);

  const infoItems = [
    { value: "totalWalletBalance", label: "Available Balance" },
    { value: "23", label: "Send Money" },
    { value: "23", label: "Recieve Payment" }
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

            {/* {transactions &&
            transactions.map((transaction: any, index: any) => (
              <TransactionInfo key={index} transaction={transaction} />
            ))
          } */}
          </div>
          {/* <WalletInfoCard wallets={walletSummary} /> */}
        </div>
      </section>

    </>

  );
}