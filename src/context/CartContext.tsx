import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { Product } from "../pages/AdminProducts/AdminProducts"
import { Props } from "../layout/Board/Board"
import { jwtDecode } from "jwt-decode"

export const CartContext = createContext()

type PropAddProduct = {
    idProduct: string   
    counter: number
}

export const CartContextProvider = ({ children } : Props) => {
    const URL = import.meta.env.VITE_URL_BACKEND
    const token = localStorage.getItem('token')
    const { id } = jwtDecode(token)
    const userId = id

    const [cartProducts, setCartProducts] = useState<Product[]>([])
    
    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${URL}/api/carrito?userId=${id}`)
            setCartProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    const addProduct = async ({ idProduct, counter } : PropAddProduct) => {
        try {
            await axios.post(`${URL}/api/carrito?id=${idProduct}`, { counter, userId })
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async (id: string) => {
        try {
            await axios.delete(`${URL}/api/carrito?id=${id}&userId=${userId}`)
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }
    
    const quantityInCart = cartProducts.length
    const totalToPay = cartProducts.reduce((acc, product) => (acc + (product.price * product.quantity)), 0)

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

