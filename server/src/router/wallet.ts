import express from 'express';
import { getUserWallet, makeMoneyTransfer } from '../controller/wallet';
import { initiatePayout } from '../controller/transactions';
import { isAuthenticated, isOwner } from '../middleware';

export default (router: express.Router) => {
    router.get('/wallet/:id', isAuthenticated, isOwner, getUserWallet)
    router.post('/wallet/transfer', isAuthenticated, makeMoneyTransfer)
    router.post('/wallet/payout', isAuthenticated, initiatePayout)
}