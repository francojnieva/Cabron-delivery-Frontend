import { useEffect, useState } from "react"
import { Product } from "../../pages/Cart/Cart"
import CardFood from "../CardFood/CardFood"
import { clientAxios } from "../../utils/axios"


const AllProducts = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [products, setProducts] = useState<Product[]>([])

    const fetchData = async () => {
        try {
            const { data } = await clientAxios.get<Product[]>(`/api/productos`)
            setProducts(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    } 
    
    useEffect(() => {
        fetchData()
    },[])

    const handleProductDelete = (id: string) => {
        setProducts(products.filter(product => product._id !== id))
    }

    const handleUpdate = () => fetchData()
   
    return (
        <section className=" py-6 flex items-center justify-around flex-wrap gap-2 md:justify-start lg:gap-5">
                { loading &&  <p className="loading  mx-auto loading-spinner loading-md"></p> }
                {products.map(product => {
                    return (
                        <CardFood
                            key={product._id}
                            idProduct={product._id}
                            image={product.image}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            discount={product.discount}
                            onDelete={handleProductDelete}
                            onUpdate={handleUpdate}
                        />
                    )
                })}
            </section>
    )
}

export default AllProducts