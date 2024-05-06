import { makeRequest } from "../services/chimoney"

export const getWallet = async (id: string) => {
    try {
        const wallet = await makeRequest('/wallets/list', 'POST', { subAccount: id })

        return wallet
    } catch (error) {
        return null
    }
}

export const transferMoney = async (data: { subAccount: string, receiver: string, valueInUSD: number }) => {
    try {
        const response = await makeRequest('/wallets/transfer', 'POST', data)
        return response
    } catch (error) {
        return null
    }
}