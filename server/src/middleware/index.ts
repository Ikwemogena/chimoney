import express from 'express'
import { getUserByToken } from '../repository/users';
import { get, merge } from 'lodash';

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const accessToken = req.headers['authorization']?.split(' ')[1];

        if (!accessToken) {
            return res.status(403).send({ message: 'Unauthorized access.' });
        }

        const existingUser = await getUserByToken(accessToken)

        if (!existingUser) {
            return res.status(403).send({ message: 'Invalid token.' });
        }

        merge(req, { identity: existingUser });

        return next()
    } catch (error) {
        res.sendStatus(403);
    }
}

export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { id } = req.params

        const currentUserId = get(req, 'identity.id') as String;

        if (!currentUserId) {
            return res.status(403).send({ message: 'Unauthorized access.' });
        }

        if (currentUserId.toString() !== id) {
            return res.status(403).send({ message: 'Unauthorized access.' });
        }

        next();
    } catch (error) {
        res.sendStatus(400);
    }
}