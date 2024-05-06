import express from 'express';
import { getUserWallet } from '../controller/wallet';

export default (router: express.Router) => {
    router.get('/wallet/:id', getUserWallet)
}