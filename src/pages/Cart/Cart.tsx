import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import { BiSolidTrashAlt } from "react-icons/bi"
import { Product } from "../AdminProducts/AdminProducts"

const Cart = () => {

    const URL = import.meta.env.VITE_URL_BACKEND

    const [cartProducts, setCartProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    const token = localStorage.getItem('token')
    const { id } = jwtDecode(token)

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${URL}/api/carrito?userId=${id}`)
            setLoading(false)
            setCartProducts(data)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(()=> {
        fetchData()
    }, [])

    return (
        <section className="px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full lg:pl-56">
            <h1 className="text-2xl font-medium mb-3">Carrito</h1>
            <div className=" flex flex-col gap-3">
            { loading && <p className="loading mx-auto loading-spinner loading-md"></p> }
            {cartProducts && cartProducts.map(({ _id, name, image }) => (
               <article key={_id} className="p-2 mb-3 w-full border rounded-lg hover:border-[#F8B602]">
                    <div className=" flex justify-end">
                        <button className="text-red-500 text-lg"><BiSolidTrashAlt /></button>
                    </div>
                    <div className="space-y-3">
                        <div className=" flex items-center -mt-4 space-x-2">
                            <img className=" size-12 bg-black rounded-full" src={image} alt="Comida" />
                            <div className=" pr-10 space-y-1">
                                <p className=" font-medium">{name}</p>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
            </div>
        </section>
    )
}

export default Cart