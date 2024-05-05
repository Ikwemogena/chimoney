import { client } from "../index";

export const createUser = async (name: string, email: string, password: string) => {
    const { rows } = await client.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password]);
    return rows;
}

export const getUserByEmail = async (email: string) => {
    try {
        const { rows } = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        return rows[0];
    } catch (error) {
        return null;
    }
}