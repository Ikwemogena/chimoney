import express from 'express';
import { getWallet, transferMoney } from '../repository/wallet';

export const getUserWallet = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params

        if (!id) {
            return res.status(400).send({ message: 'Missing Wallet ID' });
        }

        const wallet = await getWallet(id)

        return res.status(201).json(wallet).end();
    } catch (error) {
        return res.status(400).send({ message: 'Error creating user' });
    }
}

export const makeMoneyTransfer = async (req: express.Request, res: express.Response) => {
    try {
        const { subAccount, receiver, valueInUSD } = req.body

        if (!subAccount || !receiver || !valueInUSD) {
            return res.status(400).send({ message: 'Missing fields' });
        }

        const transfer = await transferMoney({ subAccount, receiver, valueInUSD })

        return res.status(201).json(transfer).end();
    } catch (error) {

    }
}