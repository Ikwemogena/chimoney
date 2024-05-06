import express from 'express';
import { getTransactions } from '../repository/transactions';

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
