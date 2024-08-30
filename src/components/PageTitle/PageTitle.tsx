import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

type Props = {
    title: string
}

const PageTitle = ({ title }: Props) => {

    const { quantityInCart } = useContext(CartContext)

    return (
        <section className="flex items-center justify-between">
            <h1 className=" text-3xl font-medium">{title}</h1>
            <Link to={'/carrito'}>
                <div className=" relative text-[#F8B602]">
                    <p className=" absolute -top-4 left-5 font-medium">{quantityInCart}</p>
                    <FaCartShopping className="text-xl cursor-pointer lg:text-2xl"/>
                </div>
            </Link>
        </section>
    )
}

export default PageTitle