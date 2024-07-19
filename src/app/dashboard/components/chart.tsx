import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const DashChart = (props: any) => {
    const chartData = [
      {
        "name": "Jan",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
      },
      {
        "name": "Feb",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
      },
      {
        "name": "Mar",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
      },
      {
        "name": "Apr",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
      },
      {
        "name": "May",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
      },
      {
        "name": "Jun",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
      },
      {
        "name": "Jul",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
      },
      {
        "name": "Aug",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
      },
      {
        "name": "Sep",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
      },
      {
        "name": "Oct",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
      },
      {
        "name": "Nov",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
      },
      {
        "name": "Dec",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
      }
    ]

    return (
        <div className='bg-zinc-800 text-white p-4 rounded-xl w-[100%] h-[100%] row-span-1 col-span-2 outline outline-1 outline-white/20'>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ffc966" stopOpacity={0.5}/>
                            <stop offset="95%" stopColor="#7e7345" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    {/* <YAxis dataKey="pv"/> */}
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#FDE68A" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )

}