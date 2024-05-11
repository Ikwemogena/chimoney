import { formatDate } from "@/utils/date";
import { fetchUserTransactions } from "../lib/actions"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { formatNumber } from "@/utils/number";

interface Transaction {
    id: number;
    issueDate: string;
    valueInUSD: number;
    chimoney: number;
    status: string;
};

export default async function page() {
    const transactions: Transaction[] = await fetchUserTransactions()

    return (
        <section className="transactions">
            <div className="transactions__header">
                <h2>Transactions</h2>
                <p>Here's a list of all your transactions</p>
            </div>

            {transactions && transactions.length > 0 ? (
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 570 }}>
                        <Table stickyHeader aria-label="Transactions table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Transaction ID</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Value in USD</TableCell>
                                    <TableCell>ChiMoney</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {transactions.map((transaction) => (
                                    <TableRow key={transaction.id}>
                                        <TableCell>{transaction.id}</TableCell>
                                        <TableCell>{formatDate(transaction.issueDate)}</TableCell>
                                        <TableCell>{formatNumber(transaction.valueInUSD)}</TableCell>
                                        <TableCell>{formatNumber(transaction.chimoney)}</TableCell>
                                        <TableCell>{transaction.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            ) : (
                <Typography variant="h6" color="textSecondary">No transactions found</Typography>
            )}

        </section>
    )
}
