import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

require('dotenv').config()

const { Client } = require('pg');

const app = express();

app.use(cors({
    credentials: true
}))

app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server is running on port 8080')
})

const client = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

client.connect()
    .then(() => console.log('Connected to database'))
    .catch((err: any) => console.error('Connection error', err.stack));
