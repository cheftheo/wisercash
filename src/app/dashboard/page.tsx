"use client";
import DashNav from "src/components/dashNav";
import { RefferalCard } from "./components/refferal";
import { Income } from "./components/income";
import { Spends } from "./components/spend";
import { DashChard } from "./components/chart";

import { useState, useEffect } from "react";

export default function Index() {
  return (
    <main className='text-white bg-zinc-900 h-screen w-screen overflow-hidden max-[600px]:overflow-y-auto'>
      <DashNav />

      <div className="w-11/12 max-[600px]:m-5 h-[70%] m-16 gap-8 grid grid-cols-3 grid-rows-2 max-[600px]:flex max-[600px]:flex-col max-[600px]:relative">
        <div className="row-span-3 col-span-2">
          <DashChard />
        </div>

        <div className="row-span-1 col-span-1">
          <Income income={20000} />
        </div>

        <div className="row-span-2 col-span-1">
          <Spends spend={155158}/>
        </div>

        <div className="row-span-1 col-span-1">
          <RefferalCard />
        </div>

        <div className="bg-zinc-800 text-white p-4 rounded-xl w-[100%] h-[100%] row-span-1 col-span-2 outline outline-1 outline-white/20">
          <h1 className="text-2xl font-bold">Card 5</h1>
          <p className="text-amber-100">card 5 desc etcetcetcetcetcetc</p>
        </div>
      </div>
    </main>
  );
}
