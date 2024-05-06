
import express from 'express';
import { sendPaymentRequest } from '../controller/transactions';

export default (router: express.Router) => {
    router.post('/request-payment', sendPaymentRequest)
}