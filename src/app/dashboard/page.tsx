"use client";
import DashNav from "src/components/dashNav";
import { CustomTooltip } from "src/components/tooltip";
import { Card } from "src/components/cards";

import { getUserData } from "src/api/getData";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from "react";

export default function Index() {
  const [data, setData] = useState<{ trasanct: number; title: string; timestamp: string; }[]>([]);

  useEffect(() => {
    getUserData('theodev', 'transactions').then((data) => {
      // console.log(data);
      var toSet: { trasanct: number, title: string, timestamp: string }[] = [];
      Object.entries(data).map(([key, value]) => {  
        // console.log()
        toSet = [...toSet, { trasanct: value.trasanct, title: value.title, timestamp: value.timestamp }];
      });

      setData(toSet);
    });
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
          <AreaChart
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
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="trasanct" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </div>
      </div>
    </main>
  );
}
