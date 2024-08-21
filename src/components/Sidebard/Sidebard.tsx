import { TiHome } from "react-icons/ti";
import { RiDiscountPercentFill } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from '../../assets/banner-delivery.png'

const Sidebard = () => {
    return (
        <section className="hidden h-screen bg-[#FFF] lg:block fixed top-0 w-48 py-3">
            <nav className="text-[#A098AE] h-full">
                <img className=" mx-auto w-16" src={Logo} alt="Logo Cabrón" title="Cabrón Delivery" />
                <ul className='space-y-4  pt-4'>
                    <Link to={'/panel'} className=' flex items-center text-xl space-x-3 mx-2 py-4 px-7 rounded-lg hover:bg-[#F8B602] hover:text-[#FFF] transition-all'>
                        <TiHome />
                        <p className=' text-sm font-medium'>Inicio</p>
                    </Link>
                    <Link to={'/ofertas'} className=' flex items-center text-xl space-x-3 mx-2  py-4 px-7 rounded-lg hover:bg-[#F8B602] hover:text-[#FFF] transition-all'>
                        <RiDiscountPercentFill />
                        <p className=' text-sm font-medium'>Descuentos</p>
                    </Link>
                    <Link to={'/perfil'} className=' flex items-center text-xl space-x-3 mx-2  py-4 px-7 rounded-lg hover:bg-[#F8B602] hover:text-[#FFF] transition-all'>
                        <HiUser />
                        <p className=' text-sm font-medium'>Perfil</p>
                    </Link>
                    <Link to={'/notificaciones'} className=' flex items-center text-xl space-x-3 mx-2  py-4 px-7 rounded-lg hover:bg-[#F8B602] hover:text-[#FFF] transition-all'>
                        <IoIosNotifications />
                        <p className=' text-sm font-medium'>Notificaciones</p>
                    </Link>
                </ul>  
            </nav>
        </section>
    )
}

export default Sidebard