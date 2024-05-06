import express from 'express';
import { getAllUserTransactions } from '../controller/transactions';

export default (router: express.Router) => {
    router.get('/user/transactions/:id', getAllUserTransactions)
}