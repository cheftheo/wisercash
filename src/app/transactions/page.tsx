export default function Transactions() {
    const mockData = [
        {
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
    ]
    
    return (
        <main className='text-white bg-zinc-900 h-screen w-screen overflow-hidden max-[600px]:h-fit max-[600px]:overflow-y-auto'>
            <section className="h-[100%] m-20 p-4 bg-zinc-800 rounded-xl flex flex-col text-center">
                <h1 className="text-2xl font-bold text-white">Transactions ({mockData.length} total)</h1>
                <div className="h-fit w-fit bg-zinc-700 ">
                    {mockData && mockData.map((el: { [key: string]: any }, i: number) => {
                        return (
                            <div key={i.toString()} className="bg-zinc-800 p-2 rounded-xl">
                                <h2 className="text-amber-200 font-bold">{el[i].title}</h2>
                            </div>
                        )
                    })}
                </div>

            </section>
        </main>
    )
}