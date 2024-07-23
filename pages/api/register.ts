"use server";

import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../src/lib/db';

import { cookies } from 'next/headers'

const generateUniqueId = (username: string) => {
    const date = new Date().getTime()
    const usernameFinal = username.substring(0, 3);
    const finalId = `${usernameFinal}-${Math.floor(date/5000)}`;

    return finalId;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
        return;
    }

    const { username, password, email } = req.body;

    const usernameExists = await client.exists(`users:${username}`);
    if (usernameExists) return res.status(401).json({ error: 'User already exists' });

    const userId = generateUniqueId(username);

    await client.hSet(`users:${username}`, {
        username,
        password,
        email,
        userId
    });


    // const cookiesStore = cookies();
    // cookiesStore.set('username', username);
    res.status(200).json({ message: 'User registered' });
}