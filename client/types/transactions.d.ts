export interface Transaction {
    id: string;
    valueInUSD: number;
    chimoney: number;
    issueID: string;
    fee: number;
    type: string;
    issuer: string;
    t_id: number;
    phone: string;
    chiRef: string;
    integration: any;
    issueDate: string;
    redeemData: any;
    initiatedBy: string;
    paymentDate: string;
    message: any;
    redeemDate: string;
    meta: any;
    payout: any;
    updatedDate: string;
    deliveryStatus: string;
    status: string;
}