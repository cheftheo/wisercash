import { cookies } from 'next/headers'

export default function Index() {
  const cookieStore = cookies();
  const userLoggedIn = cookieStore.get('username');

  if (!userLoggedIn) {
    return (
      <main className='text-white bg-zinc-900 h-screen w-screen'>You are not logged in</main>
    );
  }
  
  return (
    <main className='text-white bg-zinc-900 h-screen w-screen'>dashboard page</main>
  );
}
