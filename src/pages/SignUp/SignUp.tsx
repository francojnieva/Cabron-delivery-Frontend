import { Link, useNavigate } from 'react-router-dom';
import Banner from '../../assets/banner-delivery.png'
import { useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { MdError } from "react-icons/md";
import { clientAxios } from '../../utils/axios';

export type Form = {
    name?: string
    email: string
    password: string
    description?: string
    price?: number
    discount?: number
}

const SignUp = () => {
    
    const { handleSubmit, register, formState: { errors } } = useForm<Form>()

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [successmessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const onSubmit = async (data: Form) => {
        try {
            setLoading(true)
            const response = await clientAxios.post(`/api/registro`, data)
            if (response.status === 201) {
                setSuccessMessage(response.data.message)
                setTimeout(() => {
                    navigate('/iniciar-sesión')
                }, 2000)
            }
        } catch (error) {
            console.log(error)
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError<any>
                if (axiosError.response?.data?.message) {
                    setErrorMessage(axiosError?.response?.data.message)
                }
            }
            setLoading(false)
        }
    }

    return (
        <section className='p-6 relative min-h-screen flex flex-col items-center justify-center text-[#2e2d30] bg-[#fff] space-y-12 md:w-[85%] md:mx-auto lg:space-y-5'>
            <img className='w-48' src={Banner} alt="Banner" />
            <form className=' space-y-5 md:w-[60%] lg:w-[50%] ' onSubmit={handleSubmit(onSubmit)}>
                <div className=' space-y-1'>
                    <h1 className=' text-3xl font-bold'>Regístrate</h1>
                    <p className=' text-sm font-medium'>¡Únete a nuestra comunidad y disfruta de todos los beneficios que ofrecemos!</p>
                </div>
                <div className=' space-y-3'>
                    <input
                        className="grow py-3 pr-3 bg-transparent border border-t-transparent border-x-transparent border-b-[#bdbdbd] text-sm w-full outline-none font-medium placeholder:text-[#636262]" placeholder='Nombre'
                        autoComplete='off'
                        id="username"
                        {...register('username', {
                            required: 'Este campo es obligatorio',
                            minLength: { value: 3, message: 'El nombre debe tener entre 3 y 25 caracteres' },
                            maxLength: { value: 25, message: 'El nombre no debe superar los 25 caracteres' },
                        })}
                    />
                    <span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.username && errors.username.message}</span>
                    <input
                        className="grow py-3 pr-3 bg-transparent border border-t-transparent border-x-transparent border-b-[#bdbdbd] text-sm w-full outline-none font-medium placeholder:text-[#636262]"
                        type="email"
                        placeholder='Dirección de correo eletrónico'
                        autoComplete='off'
                        id="email"
                        {...register('email', {
                            required: 'Este campo es obligatorio',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Correo electrónico inválido',
                            },
                        })}
                    />
                    <span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.email && errors.email.message }</span>
                    <input
                        className="grow py-3 pr-3 bg-transparent border border-t-transparent border-x-transparent border-b-[#bdbdbd] text-sm w-full outline-none font-medium placeholder:text-[#636262]"
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
                </div>
                <div>
                    <Link to='/iniciar-sesión' className=" text-sm link text-blue-600">Iniciar sesión</Link>
                </div>
                {successmessage && <p className='py-2 px-4 flex text-sm items-center text-center rounded-md text-[#fff] bg-[#00a933f6]'>{successmessage}</p>}
                {errorMessage && <p className='py-2 px-4 flex text-sm items-center text-center rounded-md text-[#fff] bg-[#a90b00f6]'><MdError  className=' text-xl mr-2'/>{errorMessage}</p>}
                <button className=' w-full py-2 px-4 shadow-md rounded-md font-medium text-[#fff] bg-[#FFBC0D]' type="submit">{loading ? <span className="loading loading-spinner loading-md"></span> : 'Registrar'}</button>
            </form>
        </section>

    )
}

export default SignUp