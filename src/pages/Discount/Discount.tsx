import CardFood from "../../components/CardFood/CardFood"
import PageTitle from "../../components/PageTitle/PageTitle"

const Discount = () => {
    return ( 
        <section className="px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full lg:pl-56">
            <PageTitle 
                title='Descuentos'
            />
            <section className=" py-6 flex items-center justify-around flex-wrap gap-4 md:justify-start lg:gap-5">
                <CardFood />
            </section>
        </section>
    )
}

export default Discount