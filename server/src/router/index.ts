import express from "express";
import authentication from "./authentication";
import users from "./users";
import wallet from "./wallet";
import payment from "./payment";

const router = express.Router();

export default (): express.Router => {
    authentication(router)
    users(router)
    wallet(router)
    payment(router)
    return router
}