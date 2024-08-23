import PageTitle from "../../components/PageTitle/PageTitle";
import AllProducts from "../../components/AllProducts/AllProducts";

const Dashboard = () => {
    
    return (
        <section className="px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full lg:pl-56">
            <PageTitle 
                title={`Bienvenido/a`}
            />
            <AllProducts />
        </section>
    )
}

export default Dashboard