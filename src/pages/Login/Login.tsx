import { Link, useNavigate } from 'react-router-dom'
import Banner from '../../assets/banner-delivery.png'
import { useForm } from 'react-hook-form'
import axios, { AxiosError } from 'axios'
import { useContext, useState } from 'react'
import { MdError } from 'react-icons/md'
import { Form } from '../SignUp/SignUp'
import { clientAxios } from '../../utils/axios'
import { CartContext } from '../../context/CartContext'
import { jwtDecode } from 'jwt-decode'

const Login = () => {
    const { setToken } = useContext(CartContext)
    const { handleSubmit, register, formState: { errors } } = useForm<Form>()

    const navigate = useNavigate()

    const [loading, setLoading] = useState<boolean>(false)
    const [successmessage, setSuccessMessage] = useState<string | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const onSubmit = async (data: Form) => {
        try {
            setLoading(true)
            const response = await clientAxios.post(`/api/iniciar-sesion`, data)
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token)
                setSuccessMessage(response.data.message)
                setToken(response.data.token)
                setTimeout(() => {
                    const token = localStorage.getItem('token')
                    const {rol} = jwtDecode(token)
                    if (rol === 'admin') {
                        navigate('/admin-usuarios')
                        
                    } else {
                        navigate('/panel')
                    }
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
           setTimeout(() => {
                setErrorMessage(null)
            }, 2000)
        }
    }

    return (
        <section className='p-6 relative min-h-screen flex flex-col items-center justify-center text-[#2e2d30] bg-[#fff] space-y-12 md:w-[85%] md:mx-auto lg:space-y-5'>
            <img className='w-48' src={Banner} alt="Banner" />
            <form className=' space-y-5 md:w-[60%] lg:w-[50%] ' onSubmit={handleSubmit(onSubmit)}>
                <div className=' space-y-1'>
                    <h1 className=' text-3xl font-bold'>Iniciar sesión</h1>
                    <p className=' text-sm font-medium'>Ingresa con tu cuenta para acceder a todas nuestras funcionalidades.</p>
                </div>
                <div className=' space-y-3'>
                    <input
                        className="grow py-3 pr-3 bg-transparent border border-t-transparent border-x-transparent border-b-[#bdbdbd] text-sm w-full outline-none font-medium placeholder:text-[#636262]" placeholder='Dirección de correo electrónico'
                        type="email"
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
                    <span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.email && errors.email.message}</span>
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
                    <Link to='/registro' className=" text-sm link text-blue-600">Registrarme</Link>
                </div>
                {successmessage && <p className='py-2 px-4 flex text-sm items-center text-center rounded-md text-[#fff] bg-[#00a933f6]'>{successmessage}</p>}
                {errorMessage && <p className='py-2 px-4 flex text-sm items-center text-center rounded-md text-[#fff] bg-[#a90b00f6]'><MdError  className=' text-xl mr-2'/>{errorMessage}</p>}
                <button className=' w-full py-2 px-4 shadow-md rounded-md font-medium text-[#fff] bg-[#FFBC0D]' type="submit">{loading ? <span className="loading loading-spinner loading-md"></span> : 'Iniciar sesión'}</button>
            </form>
        </section>
    )
}

export default Login