"use server";
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

const prisma = new PrismaClient()

export const onSubmitRegister = async (user:string, email: string, password: string) => {
    const userExists = await prisma.users.findFirst({where: {email: email}});
    const userExists2 = await prisma.users.findFirst({where: {user: user}});

    if (userExists) {
        prisma.$disconnect();
        return 1;
    }

    if (userExists2) {
        prisma.$disconnect();
        return 2;
    }

    const newUser = await prisma.users.create({data: {user: user, email: email, password: password, adminLevel: 0, createdAt: new Date()}});

    cookies().set('username', user.user);

    return newUser;
    redirect('/dashboard');
    prisma.$disconnect();
}