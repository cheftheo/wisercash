"use server";

import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../src/lib/db';
import { setCookie } from 'cookies-next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
        return;
    }

    const { username, password } = req.body;

    const usernameExists = await client.exists(`users:${username}`);
    if (!usernameExists) {
        res.status(401).json({ error: 'User not found' });
        return;
    }

    const userData = await client.hGetAll(`users:${username}`);
    if (userData.password !== password) {
        res.status(401).json({ error: 'Invalid credentials' });
        return;
    }

    setCookie('username', username, { req, res, maxAge: 60 * 60 * 24, httpOnly: true });
    res.status(200).json({ error: 'Login successful' });
}