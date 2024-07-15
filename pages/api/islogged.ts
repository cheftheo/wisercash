"use server";

import { NextApiRequest, NextApiResponse } from 'next';
import { getCookie } from 'cookies-next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
        return;
    }

    const username = getCookie('username');
    if (!username) {
        res.status(401).json({ error: 'User not logged in' });
        return;
    }

    res.status(200).json({ message: 'User logged in' });
}