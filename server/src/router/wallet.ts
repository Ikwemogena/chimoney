import express from 'express';
import { getUserWallet, makeMoneyTransfer } from '../controller/wallet';
import { initiatePayout } from '../controller/transactions';

export default (router: express.Router) => {
    router.get('/wallet/:id', getUserWallet)
    router.post('/wallet/transfer', makeMoneyTransfer)
    router.post('/wallet/payout', initiatePayout)
}