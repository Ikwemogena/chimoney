import express from "express";

import { login, registerUser } from "../controller/authentication";

export default (router: express.Router) => {
    router.post('/auth/register', registerUser)
    router.post('/auth/login', login)
}