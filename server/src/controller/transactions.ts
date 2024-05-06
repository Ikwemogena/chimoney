import express from 'express';
import { getTransactions, sendPayment } from '../repository/transactions';

export const getAllUserTransactions = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params

        if (!id) {
            return res.status(400).send({ message: 'Missing Sub-Account ID' });
        }

        const userTransactions = await getTransactions(id)

        return res.status(201).json(userTransactions).end();
    } catch (error) {
        return res.status(400).send({ message: 'An error occurred' });
    }
}

export const initiatePayout = async (req: express.Request, res: express.Response) => {
    try {
        const { subAccount, chimoneys } = req.body

        if (!subAccount || !chimoneys) {
            if (!Array.isArray(chimoneys)) {
                return res.status(400).send({ message: 'chimoneys must be an array' });
            }
            return res.status(400).send({ message: 'Missing required fields' });
        }

        const payout = await sendPayment({ subAccount, chimoneys })

        return res.status(201).json(payout).end();
    } catch (error) {

    }
}