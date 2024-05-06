require('dotenv').config()

const axios = require('axios')

const baseUrl = process.env.CHIMONEY_BASE_URL

const headers = {
    'X-API-KEY': process.env.CHIMONEY_API_KEY
}

export const makeRequest = async (endpoint: string, method: 'GET' | 'POST' = 'GET', payload: any = null) => {
    const options = {
        method,
        headers,
        url: `${baseUrl}/${endpoint}`,
        data: payload,
    };
    
    try {
        const response = await axios(options);
        return Promise.resolve(response.data)
    } catch (error) {
        return Promise.reject(error.response.data.error)
    }
};