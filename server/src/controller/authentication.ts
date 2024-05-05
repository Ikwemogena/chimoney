import express from 'express';
import { createUser, getUserByEmail } from '../repository/users';
import { authentication, random } from '../helpers';
export const registerUser = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password, name } = req.body

        if (!email || !password || !name) {
            return res.status(400).send({ message: 'Missing fields' });
        }

        const existingUser = await getUserByEmail(email)

        if (existingUser) {
            return res.status(400).send({ message: 'User already exists' })
        }

        const salt = random()

        const user = await createUser(
            name,
            email,
            authentication(salt, password)
        )

        return res.status(201).json(user).end();
    } catch (error) {
        return res.status(400).send({ message: 'Error creating user' });
    }
}