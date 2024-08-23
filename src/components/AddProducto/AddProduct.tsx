import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { clientAxios } from '../../utils/axios'

type Form = {
    name: string,
    description: string,
    price: string,
    discount: string,
    imagen: FileList,
}

const AddProduct = () => {

    const { handleSubmit, register, formState: { errors } } = useForm<Form>()

    const [successMessage, setSuccessMessage] = useState<string | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const onSubmit = async (data: Form) => {
        try {
            setLoading(true)
            const formData = new FormData()
            formData.append('name', data.name)
            formData.append('description', data.description)
            formData.append('price', data.price)
            formData.append('discount', data.discount)
            formData.append('imagen', data.imagen[0])

            const result = await clientAxios.post('/api/producto', formData, 
                { headers: { 'Content-Type': 'multipart/form-data' } }
            )

            setSuccessMessage(result.data.message)
            setLoading(false)
            setTimeout(() => {
                setSuccessMessage(null)
            }, 1000)
        
        } catch (error) {
            console.log(error)
            setLoading(false)
            if (error.response) setErrorMessage('Error al agregar el producto')
            setTimeout(() => {
                setErrorMessage(null)
            }, 2500)
        }
    }

    return (
        
            <section className="flex justify-center">
                <form className=' space-y-5 md:w-[60%] lg:w-[50%]' onSubmit={handleSubmit(onSubmit)}>
                    <div className=' space-y-3'>
                        <input
                            className="grow py-3 pr-3 bg-transparent border border-t-transparent border-x-transparent border-b-[#bdbdbd] text-sm w-full outline-none font-medium placeholder:text-[#636262]" 
                            placeholder='Nombre'
                            type="text"
                            autoComplete='off'
                            id="name"
                            {...register('name', {
                                required: 'Este campo es obligatorio',
                            })}
                        />
                        <span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.name && errors.name.message}</span>
                        <input
                            className="grow py-3 pr-3 bg-transparent border border-t-transparent border-x-transparent border-b-[#bdbdbd] text-sm w-full outline-none font-medium placeholder:text-[#636262]"
                            type="text"
                            placeholder='Descripción'
                            autoComplete='off'
                            id="description"
                            {...register('description', {
                                required: 'Este campo es obligatorio',
                            })}
                        />
                        <span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.description && errors.description.message}</span>
                        <input
                            className="grow py-3 pr-3 bg-transparent border border-t-transparent border-x-transparent border-b-[#bdbdbd] text-sm w-full outline-none font-medium placeholder:text-[#636262]"
                            type="number"
                            placeholder='Precio'
                            autoComplete='off'
                            id="price"
                            {...register('price', {
                                required: 'Este campo es obligatorio',
                            })}
                        />
                        <span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.price && errors.price.message}</span>
                        <input
                            className="grow py-3 pr-3 bg-transparent border border-t-transparent border-x-transparent border-b-[#bdbdbd] text-sm w-full outline-none font-medium placeholder:text-[#636262]"
                            type="number"
                            placeholder='Descuento %'
                            autoComplete='off'
                            id="discount"
                            {...register('discount')}
                        />
                        <input
                            className="grow py-3 pr-3 bg-transparent border border-t-transparent border-x-transparent border-b-[#bdbdbd] text-sm w-full outline-none font-medium placeholder:text-[#636262]"
                            type="file"
                            placeholder='Imagen'
                            autoComplete='off'
                            id="imagen"
                            {...register('imagen', {
                                required: 'Este campo es obligatorio',
                            })}
                        />
                        <span className='text-xs text-red-600 pb-3 xl:text-sm'>{errors.imagen && errors.imagen.message}</span>
                    </div>
                    {successMessage && <p className='py-2 px-4 flex text-sm items-center text-center rounded-md text-[#fff] bg-[#00a933f6]'>{successMessage}</p>}
                    {errorMessage && <p className='py-2 px-4 flex text-sm items-center text-center rounded-md text-[#fff] bg-[#a90600f6]'>{errorMessage}</p>}
                    <button className=' w-full py-2 px-4 shadow-md rounded-md font-medium text-[#fff] bg-[#353534]' type="submit">{loading ? <span className="loading loading-spinner loading-md"></span> : 'Agregar producto'}</button>
                </form>
            </section>
       
    )
}

export default AddProduct