import { IoIosCheckmarkCircle } from "react-icons/io";
import PageTitle from "../../components/PageTitle/PageTitle";
import { PiBankFill } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { clientAxios } from "../../utils/axios";
import { changeTitleBrowser } from "../../utils/changeTitleBrowser";
import { toast } from "sonner";
import Toast from "../../components/Toaster/Toaster";
import { CartContext } from "../../context/CartContext";

type Form = {
    address: string
    comprobante: FileList
    message: string
}

type UserData = {
    id: string
    email: string
    name: string
}

const Payment = () => {
    const token = localStorage.getItem('token')
    const { email, id, name } : UserData = jwtDecode(token as string)
    const username = name

    const { cartProducts, totalToPay, emptyCart } = useContext(CartContext)

    const {handleSubmit, register, formState: { errors }, reset} = useForm<Form>()
    const [loading, setLoading] = useState<boolean>(false)

    const onSubmit = async (data : Form) => {
        try {
            setLoading(true)
            const formData = new FormData()
            formData.append('comprobante', data.comprobante[0])
            formData.append('address', data.address)
            formData.append('username', username)
            formData.append('id', id)
            formData.append('email', email)
            formData.append('totalToPay', totalToPay)
            formData.append('order', JSON.stringify(cartProducts))

            const response = await clientAxios.post<Form>('/api/pago', formData, 
                { headers: { 'Content-Type': 'multipart/form-data' } }
            )
            toast.success(response.data.message)
            setLoading(false)
            reset()
            emptyCart()
        } catch (error) {
            console.log(error)
            if (error.response) toast.error('Hubo un error. Por favor intenta más tarde')
            setLoading(false)
        }
    }

    useEffect(() => {
        changeTitleBrowser('Pagos')
    }, [])

    return (
        <section className="px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full lg:pl-56">
            <Toast />
            <PageTitle 
                title='Pagos'
            />
            <section className="pt-3">
                <div className="py-2 space-y-3">
                    <h3 className=" font-medium">Métodos de pago</h3>
                    <button className="relative border p-3 rounded-lg">
                        <IoIosCheckmarkCircle className="absolute top-1 text-xl right-1 text-[#53e62e]" />
                        <PiBankFill className=" text-3xl mx-auto"/>
                        <small>Transferencia</small>
                    </button>
                    <div className="space-y-2">
                        <p className=" font-medium">Datos de la cuenta:</p>
                        <div className=" font-normal space-y-3">
                            <p>CBU: xxxxxxxx</p>
                            <p>Alias: xxxxxxx</p>
                            <p>Titular de la cuenta: xxxxx</p>
                            <p>Banco: xxxxxx</p>
                        </div>
                    </div>
                    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className=" flex flex-col space-y-3">
                            <label className=" font-medium">Subir comprobante:</label>
                            <input 
                                type="file" 
                                id="comprobante" 
                                {...register('comprobante', {
                                    required: 'Este campo es obligatorio',
                                })}
                            />
                            <span className='text-xs text-red-600 xl:text-sm'>{errors.comprobante && errors.comprobante.message}</span>
                        </div>
                        <div className=" flex flex-col space-y-3 lg:w-56">
                            <label className=" font-medium">Dirección de destino:</label>
                            <input 
                                className=" p-2 rounded-md outline-none border border-[#cccccc]" 
                                type="text"  
                                id="address" 
                                autoComplete="off" 
                                placeholder="Ej: Las Heras 405" 
                                {...register('address', {
                                    required: 'Este campo es obligatorio',
                                    minLength: { value: 3, message: 'El nombre debe tener entre 3 y 25 caracteres' },
                                    maxLength: { value: 25, message: 'El nombre no debe superar los 25 caracteres' },
                                })}
                            />
                            <span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.address && errors.address.message}</span>
                        </div>
                        <div>
                            <button type="submit" className="py-2 px-4 rounded-md bg-[#F8B602] text-[#fff] cursor-pointer">{loading ? <span className="loading loading-spinner loading-sm"></span> : 'Enviar'}</button>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    )
}

export default Payment