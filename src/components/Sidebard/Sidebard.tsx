import { TiHome } from "react-icons/ti";
import { RiDiscountPercentFill } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/banner-delivery.png'
import { jwtDecode } from "jwt-decode";
import { FaUsers } from "react-icons/fa6";
import { BiSolidFoodMenu } from "react-icons/bi";
import { HiViewGridAdd } from "react-icons/hi";
import ImgDelivery from "../../assets/banner-women.png";

const Sidebard = () => {

    const token = localStorage.getItem('token')
    let rol
    const navigate = useNavigate()
    if (token) {
        try {
            const decoded = jwtDecode(token)
            rol = decoded.rol
        } catch (error) {
            console.error("Token no válido:", error)
            navigate('/iniciar-sesión')
        }
    }
    
    return (
        <section className="hidden h-screen bg-[#FFF] lg:block fixed top-0 w-48 py-3">
            <nav className="text-[#A098AE] h-full flex flex-col justify-between">
                <Link to={'/panel'}><img className=" mx-auto w-24" src={Logo} alt="Logo Cabrón" title="Cabrón Delivery" /></Link>
                <ul className='space-y-6'>
                    {
                        rol === 'admin'
                            ?
                            <>
                            <Link to={'/admin-usuarios'} className=' flex items-center text-xl space-x-3 mx-2 py-4 px-7 rounded-lg hover:bg-[#F8B602] hover:text-[#FFF] transition-all'>
                                <FaUsers />
                                <p className=' text-sm font-medium'>Usuarios</p>
                            </Link>
                            <Link to={'/admin-productos'} className=' flex items-center text-xl space-x-3 mx-2 py-4 px-7 rounded-lg hover:bg-[#F8B602] hover:text-[#FFF] transition-all'>
                                <BiSolidFoodMenu />
                                <p className=' text-sm font-medium'>Productos</p>
                            </Link>
                            <Link to={'/admin-agregar-productos'} className=' flex items-center text-xl space-x-3 mx-2 py-4 px-7 rounded-lg hover:bg-[#F8B602] hover:text-[#FFF] transition-all'>
                                <HiViewGridAdd />
                                <p className=' text-sm font-medium'>Agregar producto</p>
                            </Link>
                            </>
                            :
                            <>
                                <Link to={'/panel'} className=' flex items-center text-xl space-x-3 mx-2 py-4 px-7 rounded-lg hover:bg-[#F8B602] hover:text-[#FFF] transition-all'>
                                    <TiHome />
                                    <p className=' text-sm font-medium'>Inicio</p>
                                </Link>
                                <Link to={'/ofertas'} className=' flex items-center text-xl space-x-3 mx-2 py-4 px-7 rounded-lg hover:bg-[#F8B602] hover:text-[#FFF] transition-all'>
                                    <RiDiscountPercentFill />
                                    <p className=' text-sm font-medium'>Descuentos</p>
                                </Link>
                                <Link to={'/perfil'} className=' flex items-center text-xl space-x-3 mx-2 py-4 px-7 rounded-lg hover:bg-[#F8B602] hover:text-[#FFF] transition-all'>
                                    <HiUser />
                                    <p className=' text-sm font-medium'>Perfil</p>
                                </Link>
                            </>
                    }
                </ul>
                <div className="bg-[#F8B602] h-52 mx-2 rounded-lg p-5 relative">
                    <p className="text-[#FFF] font-bold text-base">¡Pide hoy y vive una experiencia única!</p>
                    <img src={ImgDelivery} className="absolute bottom-0 right-7" alt="Delivery paquete" />
                </div>
            </nav>
        </section>
    )
}

export default Sidebard