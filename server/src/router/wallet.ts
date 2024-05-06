import express from 'express';
import { getUserWallet, makeMoneyTransfer } from '../controller/wallet';

export default (router: express.Router) => {
    router.get('/wallet/:id', getUserWallet)
    router.post('/wallet/transfer', makeMoneyTransfer)
}