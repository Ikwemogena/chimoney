require('dotenv').config()

const axios = require('axios')

const baseUrl = process.env.CHIMONEY_BASE_URL

const headers = {
    'X-API-KEY': process.env.CHIMONEY_API_KEY
}

export const fetchData = async (url: string) => {
    axios.get(`${baseUrl}/${url}`, { headers })
        .then((response: any) => {
            console.log(response.data);
        })
        .catch((error: any) => {
            console.error(error);
        });
}

export const makeRequest = async (url: string, method: 'GET' | 'POST' = 'GET', payload: any = null) => {
    console.log('inside makeRequest')
    const options = {
        method,
        headers,
        url: `${baseUrl}/${url}`,
        data: payload,
    };

    try {
        const response = await axios(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};