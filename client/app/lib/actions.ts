"use server"
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

console.log(process.env.BASE_URL)

const baseUrl = process.env.BASE_URL


const useFetch = async (url: string, method: string, body: any) => {
    const token = cookies().get('accessToken')?.value
    try {
        const response = await fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            console.log(response.status)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return error
    }
}

export async function login(prevState: any, formData: FormData) {
    const credentials = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    // const endpoint = 'http://localhost:8080/auth/login'
    const endpoint = `${baseUrl}/auth/login`
    const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const data = await response.json();
        cookies().set('accessToken', data.access_token, {
            maxAge: 60 * 60 * 24,
        });
        cookies().set('user', JSON.stringify(data.user), {
            maxAge: 60 * 60 * 24,
        })
        redirect('/');
    } else {
        return { error: 'Invalid username/password' };
    }
}

export const fetchUserTransactions = async (id: string) => {
    const baseUrl = process.env.BASE_URL
    const token = cookies().get('accessToken')?.value
    try {
        // const endpoint = `http://localhost:8080/user/transactions/${id}`
        const endpoint = `${baseUrl}/user/transactions/${id}`
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            // cookies().delete('accessToken')
            console.log(response.status)
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        return error
    }
}

export const fetchWalletSummary = async (userId: string) => {

    const token = cookies().get('accessToken')?.value
    try {
        const endpoint = `http://localhost:8080/wallet/${userId}`
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            console.log(response.status)
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        return error
    }
}
