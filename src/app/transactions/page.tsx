import { mock } from "node:test"

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
        </main>
    )
}