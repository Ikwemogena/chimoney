import express from 'express';
import { addUserToDb, getExistingUser, loginUser, signUpUser } from '../repository/users';
import { AuthenticatedUser } from 'types/user';

export const registerUser = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password, name, username, phone_number } = req.body

        if (!email || !password || !name || !username || !phone_number) {
            return res.status(400).send({ message: 'Missing fields' });
        }

        const existingUser = await getExistingUser(email)

        if (existingUser) {
            return res.status(400).send({ message: 'User already exists' })
        }

        const user = await signUpUser(email, password) as AuthenticatedUser

        await addUserToDb({ id: user.id, email, name, username, phone_number })
        return res.status(201).json(user).end();
    } catch (error) {
        return res.status(400).send({ message: 'Error creating user' });
    }
}

export const login = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).send({ message: 'Missing fields' });
        }

        const user = await getExistingUser(email)

        if (!user) {
            return res.status(400).send({ message: 'User not found' })
        }

        const authUser = await loginUser(email, password)
        res.cookie('access_token', authUser.access_token, { domain: 'localhost', path: '/', expires: new Date(Date.now() + authUser.expires_in * 1000) })

        return res.status(200).json(authUser).end();
    } catch (error) {
        return res.status(400).send({ message: 'Error logging in' });
    }
}