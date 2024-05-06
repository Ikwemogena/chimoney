import { makeRequest } from "../services/chimoney"

interface UserData {
    name: string;
    email: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    id?: string;
    meta?: object;
}

export const createSubAccount = async (userData: UserData) => {
    if (!userData.name || !userData.email || !userData.id) {
        return { message: 'Missing fields' }
    }
    await makeRequest('/sub-account/create', 'POST', userData)
}

export const getTransactions = async (id: string) => {
    try {
        const transactions = await makeRequest('accounts/transactions', 'POST', { subAccount: id })
        return transactions
    } catch (error) {
        return null
    }
}

export const sendPayment = async (payload: object) => {
    try {
        const response = await makeRequest('/payouts/chimoney', 'POST', payload)
        return response
    } catch (error) {
        return error
    }
}
