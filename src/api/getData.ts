"use server";
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

const prisma = new PrismaClient()

export const getUserData = async (user: string, type: string) => {
    const userData = await prisma.users.findFirst({where: {user: user}});
    
    switch (type) {
        case 'balance':
            return userData?.balance;
        case 'email':
            return userData?.email;
        case 'transactions':
            return userData?.transactions;
        default:
            return null;
    }

}