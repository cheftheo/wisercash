"use client";

// import Image from 'next/image';
// import Logo from 'public/logo.png';

// import { Source_Code_Pro } from "next/font/google";
// const srccodepro = Source_Code_Pro({ subsets: ["latin"] });

import { Navbar } from "src/components/navbar";
import { motion } from "framer-motion";
import { Counter } from "src/utils/counter";

export default function Index() {
  return (
    <main className={`w-[100%] h-screen text-amber-50 bg-zinc-900 overflow-hidden max-[600px]:overflow-y-auto`}>
      <div className="w-[50%] h-[50%] top-[-10%] left-[-10%] absolute bg-amber-400 blur-3xl opacity-[6%] skew-x-12"></div>
      <div className="w-[50%] h-[50%] top-[-10%] left-[-20%] absolute bg-emerald-200 blur-3xl opacity-[7%] skew-y-[30deg]"></div>
      <Navbar />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4 }}>
        <div className="flex max-[600px]:flex-col max-[600px]:text-center justify-center text-4xl font-black mt-10 text-amber-100">
          Banking revolution, &nbsp;<span className="text-emerald-400 underline decoration-green-400/40">in your pocket!</span>
        </div>
      </motion.div>
      
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-y-4 justify-center gap-x-2 mt-20 text-amber-100"
      >
        <div className="flex flex-col justify-center outline outline-1 outline-white/30 w-1/6 max-[600px]:w-3/6 h-1/6 p-4 font-semibold rounded-xl bg-gray-200/10 blur-[10%]">
          What are we doing here?
          <p className="font-extralight">Providing best banking services you've ever seen! Start a free trial to test</p>
        </div>

        <div className="flex flex-col justify-center outline outline-1 outline-white/30 max-[600px]:w-3/6 w-1/6 h-1/6 p-4 font-semibold rounded-xl bg-gray-200/10 blur-[10%]">
          Why to choose us?
          <p className="font-extralight">Our service is one of the best. Support, prices, application, all curencies, everything</p>
        </div>

        <div className="flex flex-col justify-center outline outline-1 outline-white/30 max-[600px]:w-3/6 w-1/6 h-1/6 p-4 font-semibold rounded-xl bg-gray-200/10 blur-[10%]">
          How can I get started?
          <p className="font-extralight">Go to pricing page and choose your perfect service! After, you will be redirected to dashboard and you can start making transactions!</p>
        </div>
      </motion.section>

      <section className="flex flex-col justify-center items-center gap-x-2 mt-20 text-amber-100 max-[600px]:mb-10">
        <div className="font-semibold">Join a world of banking with over</div>

        <div className="flex flex-row gap-x-2 mt-2">
          <div className="inline-flex outline outline-1 outline-white/30 w-1/8 p-4 font-semibold rounded-xl bg-gray-200/10 blur-[10%]"><Counter from={0} to={3000000} />&nbsp; Users</div>
          <div className="inline-flex outline outline-1 outline-white/30 w-1/8 p-4 font-semibold rounded-xl bg-gray-200/10 blur-[10%]"><Counter from={0} to={250} />&nbsp; Currencies</div>
        </div>
        
      </section>
    </main>
  );
}
