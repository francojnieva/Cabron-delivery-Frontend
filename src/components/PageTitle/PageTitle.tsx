import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"

type Props = {
    title: string
}

const PageTitle = ({ title }: Props) => {
    return (
        <section className="flex items-center justify-between">
            <h1 className=" text-2xl font-medium">{title}</h1>
            <Link to={'/carrito'}>
                <FaCartShopping className="text-[#F8B602] text-xl cursor-pointer lg:text-2xl"/>
            </Link>
        </section>
    )
}

export default PageTitle