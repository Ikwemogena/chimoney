"use server"
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'
import _ from 'lodash';


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

export async function register(prevState: any, formData: FormData) {
    const credentials = {
        name: formData.get('name'),
        email: formData.get('email'),
        username: formData.get('username'),
        password: formData.get('password'),
        phone_number: formData.get('phone_number')
    }

    const endpoint = `${baseUrl}/auth/register`
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
        const user = _.omit(data.user, ['app_metadata', 'user_metadata', 'identities'])
        cookies().set('user', JSON.stringify(user));
        redirect('/auth/sign-in');
    } else {
        return { error: 'Unable to Create Account' };
    }

}

export async function login(prevState: any, formData: FormData) {
    const credentials = {
        email: formData.get('email'),
        password: formData.get('password')
    }

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
        const user = _.omit(data.user, ['app_metadata', 'user_metadata', 'identities'])
        cookies().set('user', JSON.stringify(user));
        redirect('/');
    } else {
        return { error: 'Invalid username/password' };
    }
}

export const signOut = () => { 
    cookies().delete('accessToken');
    redirect('/auth/sign-in');
}

export const fetchUserTransactions = async () => {
    const token = cookies().get('accessToken')?.value
    let user = cookies().get('user')?.value

    const userObj = user ? JSON.parse(user) : null;

    try {
        const endpoint = `${baseUrl}/user/transactions/${userObj?.id}`
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch transactions')
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        return null
    }
}

export const fetchWalletSummary = async () => {
    const token = cookies().get('accessToken')?.value
    let user = cookies().get('user')?.value

    const userObj = user ? JSON.parse(user) : null;

    const endpoint = `${baseUrl}/wallet/${userObj?.id}`

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });

        if (!response.ok) {
            return null
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        return error
    }
}
export const sendMoneyToChiUser = async (prevState: any, formData: FormData) => {
    const token = cookies().get('accessToken')?.value
    let user = cookies().get('user')?.value

    const userObj = user ? JSON.parse(user) : null;

    const payload = {
        subAccount: userObj?.id,
        receiver: formData.get('accountID'),
        valueInUSD: formData.get('amount')
    }

    const endpoint = `${baseUrl}/wallet/transfer`
    const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    if (response.ok) {
        const data = await response.json();
        return prevState = response.ok;
    } else {
        return { error: 'Transfer failed' };
    }

}

export const sendMoneyToExternalUser = async (prevState: any, formData: FormData) => {
    const payload = {
        subAccount: formData.get('owner'),
        chimoneys: [
            { email: formData.get('email'), valueInUSD: formData.get('amount') }
        ]
    }

    // console.log(payload)

    // const endpoint = `${baseUrl}/auth/login`
    // const response = await fetch(endpoint, {
    //     method: 'POST',
    //     body: JSON.stringify(payload),
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${cookies().get('accessToken')?.value}`,
    //     },
    // });

    // if (response.ok) {
    //     const data = await response.json();
    //     cookies().set('accessToken', data.access_token, {
    //         maxAge: 60 * 60 * 24,
    //     });
    //     cookies().set('user', JSON.stringify(data.user), {
    //         maxAge: 60 * 60 * 24,
    //     })
    //     redirect('/');
    // } else {
    //     return { error: 'Invalid username/password' };
    // }
}

export const requestPayment = async (prevState: any, formData: FormData) => {
    const payload = {
        payerEmail: formData.get('owner'),
        valueInUSD: formData.get('amount'),
        subAccount: formData.get('recipient')
    }

    console.log(payload)

    // const endpoint = `${baseUrl}/auth/login`
    // const response = await fetch(endpoint, {
    //     method: 'POST',
    //     body: JSON.stringify(payload),
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${cookies().get('accessToken')?.value}`,
    //     },
    // });

    // if (response.ok) {
    //     const data = await response.json();
    //     cookies().set('accessToken', data.access_token, {
    //         maxAge: 60 * 60 * 24,
    //     });
    //     cookies().set('user', JSON.stringify(data.user), {
    //         maxAge: 60 * 60 * 24,
    //     })
    //     redirect('/');
    // } else {
    //     return { error: 'Invalid username/password' };
    // }
}

