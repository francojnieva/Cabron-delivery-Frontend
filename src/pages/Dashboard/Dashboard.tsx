import { IoSearch } from "react-icons/io5";
import CardFood from "../../components/CardFood/CardFood";

const Dashboard = () => {

    return (
        <section className="px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full">
            <section className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-between">
                <div>
                    <h1 className=" text-2xl font-medium">Bienvenido, francojnieva</h1>
                    <p className=" text-[#434444] text-sm">Fecha actual</p>
                </div>
                <div>
                    <label className="input bg-[#fcfcfc] flex items-center gap-2">
                        <IoSearch className=" text-[#F8B602]" />
                        <input type="text" className="grow" placeholder="¿Qué quieres comer hoy?" />
                    </label>
                </div>
            </section>
            <section className=" py-8 flex items-center justify-around flex-wrap gap-4 md:justify-start lg:gap-5">
                <CardFood />
            </section>
        </section>
    )
}

export default Dashboard