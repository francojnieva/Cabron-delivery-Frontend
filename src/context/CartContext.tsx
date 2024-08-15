import { createContext, useContext, useEffect, useState } from "react"
import { Product } from "../pages/AdminProducts/AdminProducts"
import { Props } from "../layout/Board/Board"
import { clientAxios } from "../utils/axios"
import { UserContext } from "./UserContext"

export const CartContext = createContext()

type PropAddProduct = {
    idProduct: string   
    counter: number
}

export const CartContextProvider = ({ children } : Props) => {
    
    const { id } = useContext(UserContext)
    const userId: string = id

    const [cartProducts, setCartProducts] = useState<Product[]>([])
    
    const fetchData = async () => {
        try {
            const { data } = await clientAxios.get(`/api/carrito?userId=${id}`)
            setCartProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    const addProduct = async ({ idProduct, counter } : PropAddProduct) => {
        try {
            await clientAxios.post(`/api/carrito?id=${idProduct}`, { counter, userId })
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async (id: string) => {
        try {
            await clientAxios.delete(`/api/carrito?id=${id}&userId=${userId}`)
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }
    
    const quantityInCart = cartProducts.length
    const totalToPay = cartProducts.reduce((acc, product) => (acc + (product.price * (product.quantity as number))), 0)

    useEffect(()=> {
        fetchData()
    }, [])

    return (
        <CartContext.Provider value={{
            cartProducts,
            quantityInCart,
            totalToPay,
            addProduct,
            deleteProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

