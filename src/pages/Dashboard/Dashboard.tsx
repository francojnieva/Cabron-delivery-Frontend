import PageTitle from "../../components/PageTitle/PageTitle";
import AllProducts from "../../components/AllProducts/AllProducts";
import Banner from "../../assets/entrega.png";

const Dashboard = () => {
    
    return (
        <section className="px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full lg:pl-56">
            <PageTitle 
                title={`Bienvenido/a`}
            />
            <div className="bg-[#F8B602] min-h-[12rem] my-3 text-white rounded-lg p-5 relative md:p-9">
                <div className=" space-y-1 text-[1.3rem] font-bold md:text-2xl xl:text-3xl">
                    <h2>Tu comida favorita a un clic. </h2>
                    <h2>¡Ordena ahora y déjanos sorprenderte!</h2>
                    <small className="text-[.8rem] hidden md:block font-medium xl:text-base">Variedad, calidad y rapidez en cada pedido. ¡Porque tu tiempo y tus gustos importan!</small>
                </div>
                    <img src={Banner} className="w-40 absolute bottom-0 -right-5 md:w-64 lg:w-72 xl:right-7 xl:w-96" alt="mujer sonriendo con una dona roja en cada mano" />
                </div>
            <AllProducts />
        </section>
    )
}

export default Dashboard