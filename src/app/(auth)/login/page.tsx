"use client";

import { AuthSec } from "src/components/authSec";
import { onSubmitLogin } from "src/api/login";
import { FormEvent } from 'react';
import Link from 'next/link';

const LoginPage = () => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const email = (document.getElementById('email') as HTMLInputElement).value || '';
    const password = (document.getElementById('password') as HTMLInputElement).value || '';
    // await onSubmitLogin(email, password)
    await onSubmitLogin(email, password);
  };

  return (
    <main className="w-screen h-screen bg-zinc-900 overflow-hidden max-[600px]:overflow-y-auto">
      <div className="flex flex-row max-[600px]:flex-col text-white">

        <div className="w-1/2 max-[600px]:w-[150%]">
          <div className="p-16 w-4/6 h-full mt-20">
            <Link href={"/"} className="transition-all text-amber-100 max-[600px]:text-2xl font-bold p-2 outline outline-1 outline-amber-50 rounded-xl hover:bg-amber-100 hover:text-zinc-500">&lt; Home</Link>
            <h1 className="text-3xl font-bold text-amber-50 mt-4">Welcome back!</h1>
            <p className="text-amber-100">Please sign in to your account.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4" method="post">
              <label className="text-amber-50" htmlFor="email"> Email </label>
              <input className="focus:outline-0 rounded-lg p-2 bg-neutral-800 text-amber-100" type="email" id="email" name="email" />

              <label className="text-amber-50" htmlFor="password">Password</label>
              <input className="focus:outline-0 rounded-lg p-2 bg-neutral-800 text-amber-100" type="password" id="password" name="password"  />

              <button className="transition-all bg-amber-50 text-neutral-900 rounded-lg p-2 hover:bg-amber-100" type="submit">
                Sign in
              </button>

              <div className="flex flex-row gap-4 mt-4">
                <Link className="transition-all text-amber-50 hover:text-amber-100" href="/auth/forgot-password">Forgot password?</Link>
                <Link className="transition-all text-amber-50 hover:text-amber-100" href="/register">New user?</Link>
              </div>
            </form>
          </div>
        </div>

        <div className="w-1/2">
          <AuthSec />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
