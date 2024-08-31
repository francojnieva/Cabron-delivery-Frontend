import { useForm } from 'react-hook-form'
import { Form } from '../../pages/SignUp/SignUp'
import { jwtDecode } from 'jwt-decode'
import { UserData } from '../../pages/Profile/Profile'
import { clientAxios } from '../../utils/axios'
import { useState } from 'react'

type PropModal = {
    rol: string,
    idProduct?: string
    onUpdate?: () => void
}

const ModalEditProduct = ({ rol, idProduct, onUpdate } : PropModal) => {
    const token: string | null = localStorage.getItem('token')
    let userId: string | undefined

    if (token) {
        const { id } = jwtDecode<UserData>(token)
        userId = id
    }

    const [loading, setLoading] = useState<boolean>(false)
    const { handleSubmit, register, formState: { errors }, reset } = useForm<Form>()


    const closeModal = () => {
        const modal = document.getElementById(`edit-${idProduct}`) as HTMLDialogElement
        reset()
        if (modal) return modal.close()
    }

    const onSubmit = async (data: Form) => {
        if (rol === 'admin') {
            try {
                setLoading(true)
                await clientAxios.put(`/api/producto?id=${idProduct}`, data, {
                    headers: {
                        'auth': `${token}`
                    }
                })
                setLoading(false)
                closeModal()
                onUpdate()
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
    }
    
    return (
        <>
            <dialog id={`edit-${idProduct}`} className="modal">
                <div className="modal-box space-y-3 bg-[#232324] text-[#fff]">
                    <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3 ">
                        <input
                            className="w-full p-1 bg-transparent outline-none "
                            type="text"
                            id="name"
                            placeholder="Nombre"
                            autoComplete="off"
                            {...register('name', {
                                required: 'Este campo es obligatorio',
                                minLength: { value: 3, message: 'El nombre debe tener entre 3 y 25 caracteres' },
                                maxLength: { value: 25, message: 'El nombre no debe superar los 25 caracteres' },
                            })}
                        />
                        <span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.name && errors.name.message}</span>
                        <input
                            className="w-full p-1 bg-transparent outline-none "
                            type="text"
                            id="description"
                            placeholder="Descripción"
                            autoComplete="off"
                            {...register('description', {
                                required: 'Este campo es obligatorio',
                                minLength: { value: 3, message: 'La descripción debe tener entre 3 y 120 caracteres' },
                                maxLength: { value: 120, message: 'La descripción no debe superar los 120 caracteres' },
                            })}
                         />
                        <span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.description && errors.description.message}</span>
                        <input
                            className="w-full p-1 bg-transparent outline-none "
                            type="number"
                            id="price"
                            placeholder="Precio"
                            autoComplete="off"
                            {...register('price', {
                                required: 'Este campo es obligatorio',
                            })}
                        />
                        <span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.price && errors.price.message}</span>
                        <input
                            className="w-full p-1 bg-transparent outline-none "
                            type="number"
                            id="discount"
                            placeholder="Descuento"
                            autoComplete="off"
                        />
                        <div className=" flex items-center justify-end text-xs space-x-7">
                            <button type="submit" className="p-2 w-20 rounded-md bg-[#f80202e8]">
                                {loading ? <p className="loading  mx-auto loading-spinner loading-xs"></p> : 'Confirmar'}
                            </button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default ModalEditProduct