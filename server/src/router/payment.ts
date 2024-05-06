
import express from 'express';
import { sendPaymentRequest } from '../controller/transactions';
import { isAuthenticated } from '../middleware';

export default (router: express.Router) => {
    router.post('/request-payment', isAuthenticated, sendPaymentRequest)
}