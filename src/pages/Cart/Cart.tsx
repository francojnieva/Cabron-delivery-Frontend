import { useContext, useEffect, useState } from "react"
import { BiSolidTrashAlt } from "react-icons/bi"
import { CartContext } from "../../context/CartContext"
import { Product } from "../AdminProducts/AdminProducts"

const Cart = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const { cartProducts, totalToPay, deleteProduct } = useContext(CartContext)

    useEffect(() => {
        if (cartProducts.length > 0) setLoading(false)
    }, [cartProducts])

    return (
        <section className="px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full lg:pl-56">
            <div className="flex items-center justify-between mb-3">
                <h1 className="text-2xl font-medium">Carrito</h1>
                <div className=" flex items-center space-x-3">
                    <p className="hidden lg:block">Total: $ {totalToPay} </p>
                    <button className=" bg-[#F8B602] rounded-md py-1 px-3 font-medium text-white text-sm lg:text-base">Comprar</button>
                </div>
            </div>
            <div className=" flex flex-col gap-3">
            {
                loading 
                ? 
                <p className="loading loading-spinner mx-auto loading-xs lg:loading-sm"></p> 
                :
                <>
                {cartProducts && cartProducts.map(({ _id, name, image, quantity, price } : Product) => (
                    <article key={_id} className="p-2 mb-1 flex items-center justify-between w-full border rounded-lg hover:border-[#F8B602]">
                         <div className=" flex items-center space-x-2">
                             <img className=" size-12 bg-black rounded-full" src={image} alt="Comida" />
                             <div className=" pr-10 space-y-1">
                                 <p className=" font-medium">{name}</p>
                                 <p className=" font-medium text-xs">$ {price}</p>
                                 <p className=" font-medium text-xs">Cantidad: {quantity}</p>
                             </div>
                         </div>
                         <button onClick={() => deleteProduct(_id)} className="text-red-500 text-lg"><BiSolidTrashAlt /></button>
                     </article>
                ))}
                </>
            }
            </div>
            <div className="w-full text-center -ml-6 rounded-t-3xl font-medium bg-[#cacaca] p-3 fixed bottom-0 pb-20 lg:hidden">
                <p>Total: $ {totalToPay}</p>
            </div>
        </section>
    )
}

export default Cart