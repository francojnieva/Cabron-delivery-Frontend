import { TiHome } from "react-icons/ti";
import { RiDiscountPercentFill } from "react-icons/ri";
import { HiUser, HiViewGridAdd } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { BiSolidFoodMenu } from "react-icons/bi";
import { jwtDecode } from "jwt-decode";

const MenuMobile = () => {

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
        <nav className="fixed bg-[#F8B602] text-[#fff] bottom-0 w-full rounded-t-lg z-50 py-4 lg:hidden">
            <ul className=" flex items-center justify-around text-2xl">
                {
                    rol === 'admin'
                        ?
                        <>
                            <Link to={'/admin-usuarios'}><FaUsers className="hover:text-[#fff]" /></Link>
                            <Link to={'/admin-productos'}><BiSolidFoodMenu className="hover:text-[#fff]" /></Link>
                            <Link to={'/admin-agregar-productos'}><HiViewGridAdd className="hover:text-[#fff]" /></Link>
                        </>
                        :
                        <>
                            <Link to={'/notificaciones'}><IoIosNotifications className="hover:text-[#fff]" /></Link>
                            <Link to={'/ofertas'}><RiDiscountPercentFill className="hover:text-[#fff]" /></Link>
                            <Link to={'/perfil'}><HiUser className="hover:text-[#fff]" /></Link>
                            <Link to={'/panel'}><TiHome className="hover:text-[#fff]" /></Link>
                        </>
                }

            </ul>
        </nav>
    )
}

export default MenuMobile