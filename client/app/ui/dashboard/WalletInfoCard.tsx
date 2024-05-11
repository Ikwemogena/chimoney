import { formatNumber } from "@/utils/number";

interface WalletProps {
  id: string;
  owner: string;
  balance: number;
  type: string;
  transactions: any
}
function WalletInfoCard({ wallets }: { wallets: WalletProps[] }) {
  return (
    <div className="dashboard__balances">
      <h3>Wallet Breakdown</h3>
      <div className="dashboard__balances-list">
        {wallets &&
          wallets.map((wallet: WalletProps, index: number) => (
            <div key={index} className="dashboard__balances-item">
              <p className="dashboard__balances-item-type">{wallet.type} Wallet</p>
              <p className="dashboard__balances-item-balance">{formatNumber(wallet.balance)}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default WalletInfoCard