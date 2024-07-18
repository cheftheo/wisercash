export const Income = (props: any) => {
    return (
        <div className="justify-center justify-self-center align-center flex flex-col bg-zinc-800 text-white p-4 rounded-xl w-[100%] h-[100%] outline outline-1 outline-white/20">
            <h1 className="font-black text-xl text-[#FCDC5D]">Your income</h1>
            <h2 className="font-semibold text-xs text-[#FCDC5D]">Your income this month in RON</h2>
            <h3 className="font-bold text-2xl text-[#FCDC5D]">{props.income} €</h3>

            <div className="flex justify-items-end justify-end justify-self-end">
                <div className="flex w-20 h-20 items-center align-center justify-center outline outline-[12px] outline-[#FCDC5D] bg-[#ddba2d] rounded-full -mt-12 mr-14 max-[600px]:size-max">
                    <span className="text-black font-bold">{props.income}</span>
                </div>
            </div>
        </div>
    );
}