export const Spends = (props: any) => {
    return (
        <div className="flex flex-row bg-zinc-800 text-white p-4 rounded-xl w-[100%] h-[100%] outline outline-1 outline-white/20 gap-20">
            <div className="flex w-20 h-20 items-center align-center justify-center outline outline-[12px] outline-[#1d1d1f] bg-[#18181B] rounded-full mt-10 ml-10 max-[600px]:size-max">
                <span className="text-zinc-50 font-bold">{props.spend}</span>
            </div>

            <div className="flex flex-col justify-items-end justify-center justify-self-end">
                <h1 className="font-black text-xl text-[#FCDC5D]">Your spendings</h1>
                <h2 className="font-semibold text-xs text-[#FCDC5D]">Your spendings this month in RON</h2>
                <h3 className="font-bold text-2xl text-[#FCDC5D]">{props.spend} €</h3>
            </div>
        </div>
    )
}