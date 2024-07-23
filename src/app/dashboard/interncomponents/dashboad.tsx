import { RefferalCard } from "../components/refferal";
import { Income } from "../components/income";
import { Spends } from "../components/spend";
import { DashChart } from "../components/chart";
import { LimitCard } from "../components/limit";

export default function Dashboard() {
    return (
        <section className="w-11/12 max-[600px]:m-5 h-[70%] m-16 gap-8 grid grid-cols-3 grid-rows-2 max-[600px]:flex max-[600px]:flex-col max-[600px]:relative">
            <div className="row-span-3 col-span-2">
                <DashChart />
            </div>

            <div className="row-span-1 col-span-1">
                <Income income={20000} />
            </div>

            <div className="row-span-2 col-span-1">
                <Spends spend={155158}/>
            </div>

            <div className="row-span-1 col-span-1">
                <RefferalCard />
            </div>

            <div className="row-span-1 col-span-2">
                <LimitCard />
            </div>
        </section>
    )
}