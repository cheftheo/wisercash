"use client";

import { useEffect, useState } from "react"

export default function Transactions() {
    const [transactions, setTransactions] = useState<any>(null)
    const mockData = {
        "0": {
            "sum": "19.22",
            "date": "21-07-2024",
            "keyTo": "the-344217423",
            "title": "Netflix"
        },
        "1": {
            "sum": "22.22",
            "date": "20-07-2024",
            "keyTo": "the-344217423",
            "title": "Google"
        },
        "2": {
            "sum": "25.12",
            "date": "20-07-2024",
            "keyTo": "the-344217423",
            "title": "Google"
        },
        "3": {
            "sum": "35.12",
            "date": "20-07-2024",
            "keyTo": "the-344217423",
            "title": "Disney Plus"
        }
    }

    
    useEffect(() => {
        setTransactions(mockData)
        // fetch('/api/getUserData?data=transactions')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         setTransactions(mockData)
        //     })
    }, [])

    return (
        <section className="h-[80%] m-16 p-4 bg-zinc-800 rounded-xl flex flex-col text-center outline outline-1 outline-white/20 gap-20">
            <div className="flex flex-row justify-between">
                <div>Name</div>
                <div>Date</div>
                <div>Sum</div>
                <div>Transact</div>
            </div>

            <div className="flex flex-col gap-4">
                {transactions && Object.keys(transactions).map((key) => {
                    console.log(key)
                    return (
                        <div className="bg-zinc-700/60 outline outline-1 outline-white/20 rounded-xl p-4 w-full flex flex-row justify-between">
                            <div>{transactions[key].title}</div>
                            <div>{transactions[key].date}</div>
                            <div>{transactions[key].sum}</div>
                            <div>Transact</div>
                        </div>  
                    )
                })}
            </div>

        </section>
    )
}