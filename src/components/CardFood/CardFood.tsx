import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

type Card = {
    name:string,
    image: string
    description: string
    price: number,
    discount:number,
    idProduct:string,
}

const URL = import.meta.env.VITE_URL_BACKEND

const token = localStorage.getItem('token')
const { id }  = jwtDecode(token)
const userId = id

const CardFood = ({ image, name, description, price, discount, idProduct } : Card) => {

    const [successMessage, setSuccessMessage] = useState<string | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const handleCart = async () => {
        try {
            setLoading(true)
            const { data } = await axios.post(`${URL}/api/carrito?id=${idProduct}`, {userId})

            setSuccessMessage(data.message)
            setLoading(false)
            setTimeout(() => {
                setSuccessMessage(null)
            }, 2000)
           
        } catch (error) {
            console.log(error)
            setLoading(false)
            setErrorMessage(error.response)
            setTimeout(() => {
                setErrorMessage(null)
            }, 2000)
        }
    }
    
    return (
        <div className="relative card w-40 bg-[#fff] shadow-xl md:w-40 lg:w-44 xl:w-52">
            <figure><img className="w-full h-40 object-cover" src={image} alt={name} /></figure>
            <FaHeart className="absolute top-2 right-3 text-[#a3a0a0e8]" />
            <div className="card-body p-3">
                <p className={(discount === 0 || discount === null) ? `hidden` : 'badge absolute top-2 -left-1 bg-[#f81f02f1] p-3 rounded-l-none text-[#fff] font-medium'}>{discount}% OFF</p>
                <div className="card-actions items-center justify-between">
                    <div className=" space-y-1">
                        <p className="font-bold text-sm lg:text-base">{name}</p>
                        <p className="text-xs text-[#a3a3a3]">{description}</p>
                        <p className="font-bold"> <span className="text-[#F8B602]">$ </span>{price}</p>
                    </div>
                    {successMessage && <AiFillLike className=" absolute bottom-12 right-3 text-xl text-green-500" />}
                    {errorMessage && <AiFillDislike className=" absolute bottom-12 right-3 text-xl text-red-500" />}
                    <div className="w-full">
                        <button onClick={handleCart} className="p-2 rounded-lg bg-[#F8B602] text-xs font-medium text-[#fff] w-full lg:text-sm">{loading ? <p className="loading loading-spinner loading-xs lg:loading-sm"></p> : 'Agregar al carrito'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFood