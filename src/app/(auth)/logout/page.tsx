"use client";

import { AuthSec } from "src/components/authSec";
import { onSubmitLogin } from "src/api/login";
import { FormEvent, useEffect } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';


const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!getCookies().username) {
      console.log('user exited');
      deleteCookie('username');
      router.push('/')
    };
  }, []);

  return (
    <main className="w-screen h-screen bg-zinc-900 overflow-hidden max-[600px]:overflow-y-auto">
        <h1 className="text-amber-200 text-3xl justify-center text-center font-black mt-32">LOGGING OUT</h1>
    </main>
  );
};

export default LoginPage;
