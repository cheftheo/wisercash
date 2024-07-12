"use client";

import { Navbar } from 'src/components/navbar';
import { motion } from 'framer-motion';

export default function Index() {
  return (
    <main className={`w-screen h-screen text-amber-50 bg-zinc-900 overflow-hidden max-[600px]:h-max max-[600px]:overflow-y-scroll`}>
      <Navbar />

      {/* right top */}
      <div className="w-[50%] h-[50%] top-[-10%] left-[70%] fixed bg-amber-200 blur-3xl opacity-[6%] skew-x-12"></div>
      <div className="w-[50%] h-[50%] top-[-60%] left-[20%] fixed bg-emerald-200 blur-3xl opacity-[7%] skew-y-[30deg]"></div>

      {/* left bottom */}
      <div className="w-[50%] h-[50%] top-[40%] left-[-20%] fixed bg-emerald-400 blur-3xl opacity-[3%] skew-y-[10deg]"></div>
      <div className="w-[80%] h-[50%] top-[70%] left-[-20%] fixed bg-purple-500 blur-3xl opacity-[4%] skew-y-[10deg]"></div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4 }}>
        <div className="flex max-[600px]:flex-col max-[600px]:text-center justify-center text-4xl font-black mt-10 text-amber-100">
          Your banking, your prices!
        </div>
      </motion.div>
      
      <section className="flex max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-y-4 justify-center gap-x-2 mt-20 text-amber-100">
        <div className="flex flex-col justify-center outline outline-1 outline-white/30 w-1/6 max-[600px]:w-3/6 p-4 font-semibold rounded-xl bg-gray-200/10 blur-[10%]">
          Free Plan
          <p className="font-extralight">Basic services. This don't affect your experience, just provide you less options</p>
          <button className='hover:text-zinc-500 transition-all p-2 outline outline-1 outline-amber-100 rounded-xl mt-6 hover:bg-amber-100'>FREE</button>
        </div>

        <div className="flex flex-col justify-center outline outline-1 outline-white/30 w-1/6 max-[600px]:w-3/6 p-4 font-semibold rounded-xl bg-gray-200/10 blur-[10%]">
          Standard Plan
          <p className="font-extralight">Instant exchanges, low fees, big loans. You have 3% cashback</p>
          <button className='hover:text-zinc-500 transition-all p-2 outline outline-1 outline-amber-100 rounded-xl mt-6 hover:bg-amber-200'>10$ Monthly</button>
        </div>

        <div className="flex flex-col justify-center outline outline-1 outline-white/30 w-1/6 max-[600px]:w-3/6 p-4 font-semibold rounded-xl bg-gray-200/10 blur-[10%]">
          Premium Plan
          <p className="font-extralight">Standard Plan + metal card. You have 5% cashback. Faraway best choice</p>
          <button className='hover:text-zinc-500 transition-all p-2 outline outline-1 outline-amber-200 rounded-xl mt-6 hover:bg-amber-300'>30$ Monthly</button>
        </div>
      </section>
      
    </main>
  );
}
