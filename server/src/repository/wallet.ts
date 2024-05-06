import { makeRequest } from "../services/chimoney"

export const getWallet = async (id: string) => {
    try {
        const wallet = await makeRequest('/wallets/list', 'POST', { subAccount: id })

        return wallet
    } catch (error) {
        return null
    }
}