import { TiHome } from "react-icons/ti";
import { RiDiscountPercentFill } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/banner-delivery.png'
import { jwtDecode } from "jwt-decode";
import { FaUsers } from "react-icons/fa6";
import { BiSolidFoodMenu } from "react-icons/bi";
import { HiViewGridAdd } from "react-icons/hi";

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
            <nav className="text-[#A098AE] h-full">
                <img className=" mx-auto w-16" src={Logo} alt="Logo Cabrón" title="Cabrón Delivery" />
                <ul className='space-y-6 pt-7'>
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
                                <Link to={'/notificaciones'} className=' flex items-center text-xl space-x-3 mx-2  py-4 px-7 rounded-lg hover:bg-[#F8B602] hover:text-[#FFF] transition-all'>
                                    <IoIosNotifications />
                                    <p className=' text-sm font-medium'>Notificaciones</p>
                                </Link>
                            </>
                    }
                </ul>
            </nav>
        </section>
    )
}

export default Sidebard