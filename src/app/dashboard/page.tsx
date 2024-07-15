"use client";
import DashNav from "src/components/dashNav";
import { Card } from "src/components/cards";

// import { getUserTransactions } from "src/api/userData";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from "react";

import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';

export default function Index() {
  const router = useRouter();

  const [data, setData] = useState<{ trasanct: number; title: string; timestamp: string; }[]>([]);

  useEffect(() => {
    
  }, []);

  return (
    <main className='text-white bg-zinc-900 h-screen w-screen overflow-hidden'>
      <DashNav />

      <div className="flex flex-row gap-4 p-4">
        <div className="flex flex-col gap-4">
          <Card title={"Total balance"} desc={"$ 1000"}/>
          <Card title={"Total balance"} desc={"$ 1000"}/>
          <Card title={"Total balance"} desc={"$ 1000"}/>
          {/* <Card title={"Total balance"} desc={"$ 1000"}/> */}
        </div>

        <div className="bg-zinc-800 text-white p-2 rounded-lg">
          {/* <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="trasanct" stroke="#8884d8" fill="#8884d8" />
          </AreaChart> */}
        </div>
      </div>
    </main>
  );
}
