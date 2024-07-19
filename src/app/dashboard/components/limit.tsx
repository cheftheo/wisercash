export const LimitCard = (props: any) => {
    const income = props.income;
    const spend = props.spend;

    return ( 
        <div className="bg-zinc-800 text-white p-4 rounded-xl w-[100%] h-[100%] outline outline-1 outline-white/20">
            <div className="flex items-center align-center justify-center">
                <input type='range' max="100" value='55' className=""></input>
            </div>
        </div>
    )
}