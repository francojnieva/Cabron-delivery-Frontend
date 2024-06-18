import { TiHome } from "react-icons/ti";
import { RiDiscountPercentFill } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const MenuMobile = () => {
    return (
        <nav className="fixed bg-[#ffc527] text-[#232324] bottom-0 w-full rounded-t-lg z-50 py-4 lg:hidden">
            <ul className=" flex items-center justify-around text-2xl">
                <Link to={'/notificaciones'}><IoIosNotifications className="hover:text-[#fff]" /></Link>
                <Link to={'/ofertas'}><RiDiscountPercentFill className="hover:text-[#fff]" /></Link>
                <Link to={'/perfil'}><HiUser className="hover:text-[#fff]" /></Link>
                <Link to={'/panel'}><TiHome className="hover:text-[#fff]" /></Link>
            </ul>  
        </nav> 
    )
}

export default MenuMobile