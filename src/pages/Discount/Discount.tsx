import { useEffect, useState } from "react"
import CardFood from "../../components/CardFood/CardFood"
import PageTitle from "../../components/PageTitle/PageTitle"
import axios from "axios"
import { Product } from "../AdminProducts/AdminProducts"

const Discount = () => {

    const URL = import.meta.env.VITE_URL_BACKEND

    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [message, setMessage] = useState<string>('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${URL}/api/productos-descuentos`)
                if (data.length === 0) return setMessage('No hay productos con descuentos')
                setProducts(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    },[])

    return ( 
        <section className="px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full lg:pl-56">
            <PageTitle 
                title='Descuentos'
            />
            <section className=" py-6 flex items-center justify-around flex-wrap gap-4 md:justify-start lg:gap-5">
                {loading && <p className="loading mx-auto loading-spinner loading-md"></p>}
                {message && <p>{message}</p>}
                {products.map((product) => {
                        return (
                            <CardFood
                                key={product._id}
                                idProduct={product._id}
                                image={product.image}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                discount={product.discount}
                            />
                        )
                    })
                }
            </section>
        </section>
    )
}

export default Discount