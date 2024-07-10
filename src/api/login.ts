"use server";
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'

const prisma = new PrismaClient()

export const onSubmitLogin = async (email: string, password: string) => {
    const user = await prisma.users.findFirst({where: {email: email, password: password}});

    if (user && user.email && user.password) {
        prisma.$disconnect();
        redirect('dashboard');
    }  

    // to do return error message

    prisma.$disconnect();

    // if (!user) {
    //     return [false, null];
    // }
    
    // prisma.$disconnect();
    // return [true, user];
}