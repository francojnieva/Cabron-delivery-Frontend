import { useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { BiSolidTrashAlt } from "react-icons/bi";
import { clientAxios } from "../../utils/axios";
import ModalEdit from "../ModalEditProduct/ModalEditProduct";
import Toast from "../Toaster/Toaster";
import { toast } from "sonner";
import { FaEdit } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

type Card = {
    name: string,
    image: string
    description: string
    price: number,
    discount: number,
    idProduct: string,
    onDelete: (id: string) => void
    onUpdate: () => void
}

export type TokenPayload = {
    rol: string
}

const CardFood = ({ image, name, description, price, discount, idProduct, onDelete, onUpdate }: Card) => {
    const token = localStorage.getItem('token') || ''
    const { rol } = jwtDecode<TokenPayload>(token)
    const [loading, setLoading] = useState<boolean>(false)
    const [loadingDelete, setLoadingDelete] = useState<boolean>(false)
    const [counter, setCounter] = useState<number>(1)
    const { addProduct } = useContext(CartContext)

    const add = () => setCounter(counter + 1)
    const subtract = () => setCounter(counter - 1)

    const handleCart = async () => {
        try {
            setLoading(true)
            await addProduct({
                idProduct,
                counter
            })
            setLoading(false)
            toast.success('Producto agregado al carrito')
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error('Error al agregar al carrito')
        }
    }

    const handleDeleteProduct = async (id: string) => {
        try {
            setLoadingDelete(true)
            await clientAxios.delete(`/api/producto?id=${id}`, {
                headers: {
                    'auth': `${token}`
                }
            })
            onDelete(id)
        } catch (error) {
            console.log(error)
            setLoadingDelete(false)
        }
    }

    return (
        <div className="relative card w-44 bg-[#fff] shadow-xl xl:w-48">
            <Toast />
            <figure><img className="w-full h-40 object-cover" src={image} alt={name} /></figure>
            {rol === 'admin' && (
                loadingDelete ? (
                    <p className="loading loading-spinner loading-xs lg:loading-sm absolute top-2 right-3 text-red-500"></p>
                ) : (
                    <>
                        <BiSolidTrashAlt
                            onClick={() => handleDeleteProduct(idProduct)}
                            className="absolute top-2 right-3 text-red-500 text-lg"
                        />
                        <FaEdit
                            onClick={() => {
                                const modal = document.getElementById(`edit-${idProduct}`) as HTMLDialogElement | null
                                modal?.showModal()
                            }}
                            className="absolute bottom-4 right-3 text-blue-500 text-lg cursor-pointer"
                        />
                        <ModalEdit 
                            rol={rol}
                            idProduct={idProduct}
                            onUpdate={onUpdate}
                        />
                    </>
                )
            )}
            <div className="card-body p-3">
                <p className={(discount === 0 || discount === null) ? `hidden` : 'badge absolute top-2 -left-1 bg-[#f81f02f1] p-3 rounded-l-none text-[#fff] font-medium'}>{discount}% OFF</p>
                <div className="card-actions items-center justify-between">
                    <div className=" space-y-1">
                        <p className="font-bold lg:text-base">{name}</p>
                        <p className="text-sm text-[#8d8d8d]">{description}</p>
                        <div className=" flex flex-col space-y-2 lg:flex-row lg:items-center lg:justify-between pt-2 lg:space-y-0">
                            <p className="font-bold"> <span className="text-[#F8B602]">$ </span>{price}</p>
                            <div className=" flex items-center font-medium text-[#fff] space-x-2 w-20">
                                <button hidden={rol === 'admin'} onClick={subtract} disabled={counter <= 1} className="px-2 rounded-md  bg-[#333333]">-</button>
                                <p hidden={rol === 'admin'} className=" text-center text-black">{counter}</p>
                                <button hidden={rol === 'admin'} onClick={add} className="px-2 rounded-md bg-[#333333]">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-3" hidden={rol === 'admin'}>
                        <button onClick={handleCart} className="p-2 rounded-lg bg-[#F8B602] text-xs font-medium text-[#fff] w-full lg:text-sm">{loading ? <p className="loading loading-spinner loading-xs lg:loading-sm"></p> : 'Agregar al carrito'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFood