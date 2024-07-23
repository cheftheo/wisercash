import { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers'

import client from '../../src/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        res.status(405).end('Method Not Allowed');
        return;
    }
    // const cookiesStore = cookies();
    
    // res.status(200).json();

    // const param = req.query.data;
    // if (param == "transactions") {
    //     const transactions = await client.hGetAll(`transactions:${username}`);

    //     res.status(200).json(transactions);
    // }
}