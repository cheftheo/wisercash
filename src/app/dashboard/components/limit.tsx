export const LimitCard = (props: any) => {
    const income = props.income || 0;
    const spend = props.spend || 65;

    return ( 
        <div className="bg-zinc-800 text-white p-4 rounded-xl w-[100%] h-[100%] outline outline-1 outline-white/20">
            <div className="flex flex-col gap-3 align-center justify-self-center justify-center">
                <h1 className="font-bold text-amber-200">Income / Spending balance</h1>
                <progress id="limitSlider" max="100" value={spend}></progress>
            </div>
        </div>
    )
}