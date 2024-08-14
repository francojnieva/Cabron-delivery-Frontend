import { useEffect, useState } from "react"
import AddProduct from "../../components/AddProducto/AddProduct"
import axios from "axios"
import CardFood from "../../components/CardFood/CardFood"

export type Product = {
    _id: string;
    image: string;
    name: string;
    description: string;
    price: number;
    discount: number;
    quantity?: number;
}

const AdminProducts = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://cabron-delivery-backend.vercel.app/api/productos')
                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        } 

        fetchData()
    },[])

  return (
    <section className=" flex flex-col">
        <AddProduct />
        <section className="px-6 pt-4 pb-20 bg-[#F5F5F5] w-full lg:pl-56">
            <h1 className=" text-2xl font-medium">Productos</h1>
            <hr className=" my-3" />
            <section className=" py-6 flex items-center justify-around flex-wrap gap-2 md:justify-start lg:gap-5">
            {products.map(product => {
                    return (
                        <CardFood
                            key={product._id}
                            image={product.image}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            discount={product.discount}
                            idProduct={product._id}
                        />
                    )
                })}
            </section>
        </section>
    </section>
  )
}

export default AdminProducts