import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav className="mt-4 mb-4 flex flex-row gap-x-1 justify-center w-screen bg-zinc-900 text-amber-100">
            <Link href="/" className='transition-all p-2 opacity-20 hover:opacity-100 hover:bg-amber-100 hover:text-zinc-800 outline-none border border-1 border-amber-50/20 rounded-2xl'>
                Home
            </Link>

            <Link href="/login" className='transition-all p-2 opacity-20 hover:opacity-100 hover:bg-amber-100 hover:text-zinc-800 outline-none border border-1 border-amber-50/20 rounded-2xl'>
                Authentification
            </Link>

            <Link href="/pricing"  className='transition-all p-2 opacity-20 hover:opacity-100 hover:bg-amber-100 hover:text-zinc-800 outline-none border border-1 border-amber-50/20 rounded-2xl'>
                Pricing
            </Link>
        </nav>
    )
}