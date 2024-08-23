import { createContext, useEffect, useState } from "react"
import { Props } from "../layout/Board/Board"
import { clientAxios } from "../utils/axios"
import { jwtDecode } from "jwt-decode"
import { UserData } from "../pages/Profile/Profile"
import { Product } from "../pages/Cart/Cart"

export const CartContext = createContext()

type PropAddProduct = {
    idProduct: string   
    counter: number
}

export const CartContextProvider = ({ children } : Props) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
    const [userId, setUserId] = useState<string | undefined>()

    useEffect(() => {
        if (token) {
            try {
                const { id } = jwtDecode<UserData>(token)
                setUserId(id)
            } catch (error) {
                console.error("Error decoding token:", error)
            }
        }
    }, [token])
    
    const [cartProducts, setCartProducts] = useState<Product[]>([])
    
    const fetchData = async () => {
        if (userId) {
            try {
                const { data } = await clientAxios.get(`/api/carrito?userId=${userId}`)
                setCartProducts(data)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const addProduct = async ({ idProduct, counter } : PropAddProduct) => {
        if (userId) {
            try {
                await clientAxios.post(`/api/carrito?id=${idProduct}`, { counter, userId })
                fetchData()
            } catch (error) {
                console.log(error)
            }
        }
    }

    const deleteProduct = async (id: string) => {
        if (userId) {
            try {
                await clientAxios.delete(`/api/carrito?id=${id}&userId=${userId}`)
                fetchData()
            } catch (error) {
                console.log(error)
            }
        }
    }
    
    const quantityInCart = cartProducts.length
    const totalToPay = cartProducts.reduce((acc, product) => (acc + (product.price * (product.quantity as number))), 0)

    useEffect(()=> {
        fetchData()
    }, [userId])

    return (
        <CartContext.Provider value={{
            cartProducts,
            quantityInCart,
            totalToPay,
            addProduct,
            deleteProduct,
            setToken
        }}>
            {children}
        </CartContext.Provider>
    )
}

