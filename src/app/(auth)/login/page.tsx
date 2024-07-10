import { AuthSec } from "src/components/authSec";

const LoginPage = () => {
  return (
    <main className="w-screen h-screen bg-zinc-900 overflow-hidden">
      <div className="flex flex-row text-white">

        <div className="w-1/2">
          <div className="p-16 w-4/6 h-full mt-24">
            <h1 className="text-3xl font-bold text-amber-50">Welcome back!</h1>
            <p className="text-amber-100">Please sign in to your account.</p>

            <form className="flex flex-col gap-4 mt-4">
                <label className="text-amber-50" htmlFor="email"> Username </label>
                <input className="focus:outline-0 rounded-lg p-2 bg-neutral-800 text-amber-100" type="email" id="email" name="email" />

                <label className="text-amber-50" htmlFor="password">Password</label>
                <input className="focus:outline-0 rounded-lg p-2 bg-neutral-800 text-amber-100" type="password" id="password" name="password"  />

                <button className="transition-all bg-amber-50 text-neutral-900 rounded-lg p-2 hover:bg-amber-100" type="submit">
                    Sign in
                </button>

                <a className="transition-all text-amber-50 hover:text-amber-100" href="/auth/forgot-password">Forgot password?</a>
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
