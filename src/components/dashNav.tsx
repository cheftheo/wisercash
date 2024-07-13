export default function DashNav() { 
    return (
        <nav className="flex flex-row gap-x-2 justify-center bg-zinc-900 text-amber-100 text-sm">
            <a className=" p-2 rounded-3xl m-3 hover:bg-amber-100 hover:text-zinc-500 transition-all">Dashboard</a>
            <a className="p-2 rounded-3xl m-3 hover:bg-amber-100 hover:text-zinc-500 transition-all">Settings</a>
            <a className="p-2 rounded-3xl m-3 hover:bg-amber-100 hover:text-zinc-500 transition-all">Profile</a>
            <a className="p-2 rounded-3xl m-3 hover:bg-amber-100 hover:text-zinc-500 transition-all">Transactions</a>
            <a className="p-2 rounded-3xl m-3 hover:bg-amber-100 hover:text-zinc-500 transition-all">Send money</a>
        </nav>
    )
};