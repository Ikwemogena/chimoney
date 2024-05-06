import express from 'express';
import { getAllUserTransactions } from '../controller/transactions';
import { isAuthenticated, isOwner } from '../middleware';

export default (router: express.Router) => {
    router.get('/user/transactions/:id', isAuthenticated, isOwner, getAllUserTransactions)
}