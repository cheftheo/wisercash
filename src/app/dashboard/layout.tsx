"use client";

import { useEffect, useState } from "react";
import Transactions from "./interncomponents/transactions";
import ProfilePage from "./interncomponents/profile";
import Dashboard from "./interncomponents/dashboad";

import { motion, AnimatePresence } from "framer-motion";

export default function DashLayout() {
  const [renderedPage, setRenderedPage] = useState<string>('dashboard');

  const renderComponent = () => {
    switch (renderedPage) {
      case 'transactions':
        return <Transactions />;
      case 'profile':
        return <ProfilePage />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };

  useEffect(() => {
    setRenderedPage('dashboard')
  }, [])

  return (
    <main className='text-white bg-zinc-900 h-screen w-screen overflow-hidden max-[600px]:h-fit max-[600px]:overflow-y-auto'>
      <nav className="flex max-[600px]:flex-col max-[600px]:text-center flex-row gap-x-2 justify-center bg-zinc-900 text-amber-100 text-sm">
        <a onClick={() => setRenderedPage('dashboard')} className="hover:cursor-pointer p-2 rounded-3xl m-3 hover:bg-amber-100 hover:text-zinc-500 transition-all">Dashboard</a>
        <a className="hover:cursor-pointer p-2 rounded-3xl m-3 hover:bg-amber-100 hover:text-zinc-500 transition-all">Settings</a>
        <a onClick={() => setRenderedPage('profile')} className="hover:cursor-pointer p-2 rounded-3xl m-3 hover:bg-amber-100 hover:text-zinc-500 transition-all">Profile</a>
        <a onClick={() => setRenderedPage('transactions')} className="hover:cursor-pointer p-2 rounded-3xl m-3 hover:bg-amber-100 hover:text-zinc-500 transition-all">Transactions</a>
        <a onClick={() => setRenderedPage('transactions')} className="hover:cursor-pointer p-2 rounded-3xl m-3 hover:bg-amber-100 hover:text-zinc-500 transition-all">Send money</a>
      </nav>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={renderedPage}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {renderComponent()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
