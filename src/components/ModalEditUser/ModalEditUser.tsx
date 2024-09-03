import { useForm } from 'react-hook-form'
import { Form } from '../../pages/SignUp/SignUp'
import { jwtDecode } from 'jwt-decode'
import { UserData } from '../../pages/Profile/Profile'
import { clientAxios } from '../../utils/axios'
import { useState } from 'react'
import Toast from '../Toaster/Toaster'
import { toast } from 'sonner'

type User = {
    updateUser: () => void
}

const ModalEditUser = ({ updateUser } :User) => {
    const token = localStorage.getItem('token') || ''
    const { id } = jwtDecode<UserData>(token)
    const [loading, setLoading] = useState<boolean>(false)
    const { handleSubmit, register, formState: { errors }, reset } = useForm<Form>()

    const showModal = () => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement
        if (modal) return modal.showModal()
    }

    const closeModal = () => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement
        reset()
        if (modal) return modal.close()
    }

    const onSubmit = async (data : Form) => {
        try {
            setLoading(true)
            await clientAxios.put(`/api/editar-usuario?id=${id}`, data, {
                headers: {
                    'auth': `${token}`
                }
            })
            toast.success('Perfil editado')
            setLoading(false)
            closeModal()
            updateUser()
        } catch (error) {
            console.log(error)
            setLoading(false)
            closeModal()
            toast.error('Hubo un problema. Por favor, intenta más tarde')
        }
    }
    
    return (
        <>
        <Toast />
        <button className="rounded-md p-1 text-white bg-[#3d3d3d] md:w-28" onClick={showModal}>
            <p>Editar perfil</p>
        </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box space-y-3 bg-[#232324] text-[#fff]">
                    <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3 ">
                        <input 
                            className="w-full p-1 bg-transparent outline-none " 
                            type="text" 
                            id="username"
                            placeholder="Nombre"
                            autoComplete="off"
                            {...register('username', {
                                required: 'Este campo es obligatorio',
                                minLength: { value: 3, message: 'El nombre debe tener entre 3 y 25 caracteres' },
                                maxLength: { value: 25, message: 'El nombre no debe superar los 25 caracteres' },
                            })}
                            />
                        <span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.username && errors.username.message}</span>
                        <input 
                            className="w-full p-1 bg-transparent outline-none" 
                            type="email"  
                            id="email" 
                            placeholder="Email"
                            autoComplete="off"
                            {...register('email', {
                                required: 'Este campo es obligatorio',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Correo electrónico inválido',
                                },
                            })}
                            />
                        <span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.email && errors.email.message}</span>
                        <input
                            className="w-full p-1 bg-transparent outline-none" 
                            type="password"
                            placeholder='Contraseña'
                            autoComplete='off'
                            id="password"
                            {...register('password', {
                                required: 'Este campo es obligatorio',
                                minLength: { value: 8, message: 'La contraseña debe tener entre 8 y 30 caracteres' },
                                maxLength: { value: 30, message: 'La contraseñano debe superar los 30 caracteres' },
                            })}
                            />
                        <span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.password && errors.password.message}</span>
                        <div className=" flex items-center justify-end text-xs space-x-7">
                            <p onClick={closeModal}>Cancelar</p>
                            <button type="submit" className="p-2 w-20 rounded-md bg-[#f80202e8]">
                                {loading ?<p className="loading  mx-auto loading-spinner loading-xs"></p> : 'Confirmar' }
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

export default ModalEditUser