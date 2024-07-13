export const CustomTooltip = ({ title, value }: {title: string, value: string}) => {
    console.log(title, value)

    return (
        <div className="bg-zinc-800 text-white p-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-amber-100">{value}</p>
        </div>
    );
};